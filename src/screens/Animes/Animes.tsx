import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from './src/context/userContext';
import { View, Alert, Text } from 'react-native';

import { db } from '../../../db/firebaseConnection';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { BackgroundImage, Imagem, ViewAnimes, 
    ButtonImg, Tittle, ViewItens,  ViewStar, ViewDetails,
     ViewSetas, Container } from './styles'

export default function Animes(){

    const [listaAnimes, setListAnimes] = useState([])
    const [idEdit, setIdEdit] = useState(false)
    const [myStar, setMyStar] = useState([1,2,3])

      const [itensPerPage, setItensPerPage] = useState(2)
      const [currentPage, setCurrentPage] = useState(0)
  
      const pages = Math.ceil((listaAnimes.length / itensPerPage) - 1)
  
      const startIndex = currentPage * itensPerPage;
      const endIndex = startIndex + itensPerPage;
     
      const [novaLista, setNovaLista] = useState([])

      const [refresh, setRefresh] = useState(true)

        useEffect(() => {
        let timeoutVariable

        if(refresh){
            timeoutVariable = setTimeout(() => setRefresh(false), 1000)
        }

        return () => clearTimeout(timeoutVariable)

        }, [refresh]) 

        _getData = () => {
        fetch()
        .then(data => {
            setRefresh(true)
        })
        }

        useEffect(() => {
            setTimeout(handleShuffle, 1000)
          }, [refresh]) 
    

//    Embaralhando array de animes 
       const shuffleArray = (listaAnimes) => {
        let shuffledArray = [...listaAnimes];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
       
      // Chamando o metodo de embaralhar
      function handleShuffle(){
        setNovaLista(shuffleArray(listaAnimes));

      };

      const currentLista = novaLista.slice(startIndex, endIndex)    


    async function getStorage(){
        const storage = await AsyncStorage.getItem('@my-star')
        if(storage == '[]'){
            setMyStar([])   
        }
   }

   async function handleStorage(){
        try {
            const jsonValue = JSON.stringify(myStar);
            await AsyncStorage.setItem('@my-star', jsonValue);
            // alert('salvou storage')
          } catch (err) {
              console.log(err)
          }

    }

    // função para remover storage
    // async function removeStorage(){
//     AsyncStorage.clear();

//     alert('limpou storage')
//    }


    //setTimeout(removeStorage,5000)

    useEffect(()=>{

        async function getDadosListAnimes(){

            const usersRef = collection(db, "animes");
    
            getDocs(usersRef)
            .then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        avatar: doc.data().avatar,
                        votos: doc.data().votos
                    })
                })

              setListAnimes(lista)

            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getDadosListAnimes()
        getStorage()
       

    }, [idEdit])



    function proximoItem() {
        if (currentPage == pages) {
            alert('Você estar na ultima página')
            return
        }
        setCurrentPage(currentPage + 1)
    }

    function anteriorItem() {
        if (currentPage == 0) {
            alert('Você estar na primeira página')
            return
        }
        setCurrentPage(currentPage - 1)
    }

   async function handleUpdateVoto(item){

        if(myStar.length == 0){
            Alert.alert("animeX", 'Você não pode mais avaliar!')
            return;
        }
        
        setIdEdit(!idEdit)

       let idAnime = item.id
       let pontos = item.votos

       const docRef = doc(db, "animes", idAnime)
       await updateDoc(docRef, {
        votos: pontos + 1
       })

       Alert.alert("animeX", 'Voto Registrado' + " " + `${item.nome}`)
       myStar.shift();
       handleShuffle()

       if(myStar.length == 0){
            setTimeout(handleStorage, 2000)
            return;
       }else{
            console.log('não salvou!')
       }

    }

   
    return (
        <BackgroundImage source={require('../../utils/img/fundoAnimes.png')}>
           <Container>
                <ViewItens>
                        <Tittle > {myStar.length == 0 ? 'Você não tem estrelas...' : 'A cada voto você usa 1 estrela' } </Tittle>
                    <ViewStar>
                        {myStar.map((index)=>{
                            return(
                                <View key={index}>  
                                    <Foundation name="star" size={16} color="#fff" />
                                </View>
                            )
                        })}
                    </ViewStar>
                </ViewItens>
                    <ViewAnimes>
                        {currentLista.map((item, index)=>{
                            return(
                                <ViewDetails key={index}>
                                    <ButtonImg onPress={() => handleUpdateVoto(item)}>
                                        <Imagem 
                                            src={item.avatar}
                                        />
                                        <Tittle>{item.nome}</Tittle>
                                    </ButtonImg>
                                </ViewDetails>
                            )
                        })} 
                        {/* <Button title='teste' onPress={removeStorage}/>  */}
                    </ViewAnimes>
                    <ViewSetas>
                        <AntDesign onPress={anteriorItem} name="left" size={24} color="#000" />
                            <Text style={{color:'#000'}}>{currentPage + 1} / {listaAnimes.length / itensPerPage }</Text>
                        <AntDesign onPress={proximoItem} name="right" size={24} color="#000" />
                    </ViewSetas>
            </Container>
        </BackgroundImage>
    );
}
