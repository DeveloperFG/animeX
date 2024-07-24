import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';

import { Pressable, ToastAndroid, StyleSheet } from 'react-native';

import Animated, { useSharedValue, withSpring, withTiming,  ZoomOut, FlipInYLeft } from 'react-native-reanimated';

import {ViewPersonagens, ViewButton, ImagemVs, ViewImagem, BackgroundImage, Tittle } from './styles'
    
import { db } from '../../../db/firebaseConnection';
    
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

import Load from '../../utils/Load/Load';

export default function Personagens() {

   // Variáveis de paginação 

   const PressableAnimmated = Animated.createAnimatedComponent(Pressable)

   const [listaPersonagens, setListaPersonagens] = useState([])
   const [idEdit, setIdEdit] = useState(false)

   const [itensPerPage, setItensPerPage] = useState(2)
   const [currentPage, setCurrentPage] = useState(0)

//    const pages = Math.ceil((listaPersonagens.length / itensPerPage) - 1)

   const startIndex = currentPage * itensPerPage;
   const endIndex = startIndex + itensPerPage;

   const [novaLista, setNovaLista] = useState([])

   const [control, setControl] = useState(true)

   const [refresh, setRefresh] = useState(true)

   const scale = useSharedValue(0)

//    const animatedStyle = useAnimatedStyle(()=>{
//     return{
//         transform: [{scale: scale.value,}],
//     }
//    })

   function onPressIN(){
       scale.value= withTiming(1.3, { duration: 100 })
   }

   function onPressOut(){
       scale.value= withSpring(1)
   }

 
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
    

   // Embaralhando array de animes 
       const shuffleArray = (listaPersonagens) => {
        let shuffledArray = [...listaPersonagens];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
       
      // Chamando o metodo de embaralhar
      function handleShuffle(){
        setNovaLista(shuffleArray(listaPersonagens));

      };

    
      const currentLista = novaLista.slice(startIndex, endIndex)    


    useEffect(()=>{

        async function getDadosListAnimes(){

            const usersRef = collection(db, "personagens");
    
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

              setListaPersonagens(lista)

            })
            .catch((err)=>{
                console.log(err)
            })
        }

        getDadosListAnimes()
       
    }, [idEdit])

    useEffect(()=>{

        setTimeout(handleShuffle, 1500)

    }, [])

   async function handleUpdateVoto(item){
        handleShuffle()
        setIdEdit(!idEdit)

       let idAnime = item.id
       let pontos = item.votos

       const docRef = doc(db, "personagens", idAnime)
       await updateDoc(docRef, {
        votos: pontos + 1
       })

        ToastAndroid.show('Votou em'+" "+`${item.nome}`,  ToastAndroid.SHORT)
    }
    
    function handleControl(){
        setControl(false)
    }

    setTimeout(handleControl, 3000)


    return (
        <BackgroundImage source={require('../../utils/img/fundoPersonagens.png')}>
                <ViewPersonagens>
                        {control == true ? <Load/> : (
                           <>
                                  {currentLista.map((item, index)=>{
                                        return(
                                    <ViewButton key={index}> 
                                        <PressableAnimmated 
                                         entering={FlipInYLeft.duration(700).delay(1000)}
                                         exiting={ZoomOut.duration(1000)}    
                                         onPressIn={onPressIN} 
                                         onPressOut={onPressOut} 
                                         onPress={() => handleUpdateVoto(item)}>
                                            <Animated.Image
                                             style={[styles.Img]}
                                                src={item.avatar}
                                             />
                                        </PressableAnimmated>
                                        <Tittle >{item.nome}</Tittle>
                                    </ViewButton>
                                
                                )
                            })} 
                            </> 
                        )}
                </ViewPersonagens>
            <ViewImagem>
                <ImagemVs
                    source={require('../../utils/img/vs1.png')}
                    />
            </ViewImagem>
            <StatusBar style="auto" />
      </BackgroundImage>
      
    );
}

const styles = StyleSheet.create({
    Img: {
      width: 150,
      height: '60%',
      objectFit: 'contain'
    },

  });