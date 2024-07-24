import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal,TouchableOpacity, Linking } from 'react-native';

import { db } from '../../../db/firebaseConnection';
import { getDocs,  collection,} from 'firebase/firestore'

import { Picker } from '@react-native-picker/picker';

import {BackgroundImage, ViewContainer, ViewInfos} from './styles'

import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';


export default function Rank() {

    const [dados, setDados] = useState([])
    const [select, setSelect] = useState('animes')
    const [detalhes, setDetalhes] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{

        async function getDadosListAnimes(){

            const usersRef = collection(db, `${select}`);
    
            getDocs(usersRef)
            .then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        avatar: doc.data().avatar,
                        sobre: doc.data().sobre,
                        poder1: doc.data().poder1,
                        poder2: doc.data().poder2,
                        poder3: doc.data().poder3,
                        votos: doc.data().votos
                    })
                })

                let sortPoints = lista.sort((a, b) => {
                    return a?.votos >= b?.votos ? -1 : 1;
                });

              setDados(sortPoints)

            })
            .catch((err)=>{
                console.log(err)
            })
        }

        getDadosListAnimes()

    }, [select])


    function handleModal(item){
        setOpenModal(true)

        setDetalhes(item)
    }

    return (

        <BackgroundImage source={require('../../utils/img/fundoRank.jpg')}>
          <Modal
            visible={openModal}
            statusBarTranslucent={true}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.content}>
              <View style={styles.card}>
                {select === 'personagens' ? 
                 <>
                    <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'30%'}}>
                            <Image style={{width:100, height: 150, objectFit:'contain'}} src={detalhes.avatar} />
                            <Text style={styles.titleModal}>{detalhes.nome}</Text>
                        </View>
                            <View style={{width:'70%', marginLeft:'2%'}}>
                                <Text style={styles.desc}>
                                    {detalhes.sobre}
                                </Text>
                            </View>
                    </View>
                    
                    <View style={{width:'100%', flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold', marginTop:'2%'}}>
                            Técnicas principais:
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Entypo name="flash" size={24} color="blue"/>
                                <Text>{detalhes.poder1}</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: '1%'}}>
                            <Entypo name="flash" size={24} color="blue"/>
                                <Text>{detalhes.poder2}</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: '1%'}}>
                            <Entypo name="flash" size={24} color="blue"/>
                                <Text>{detalhes.poder3}</Text>
                            </View>
                        </View>
                    </View>
                </> : 
                
                <>

                    <View style={{width:'100%', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: 4}}>
                        <View style={{width:'80%', alignItems:'center', justifyContent:'center'}}>
                            <Image style={{width: '100%', height: 150, objectFit:'contain'}} src={detalhes.avatar} />
                            <Text style={styles.titleModal}>{detalhes.nome}</Text>
                        </View>
                            <Text style={styles.desc}>
                                 {detalhes.sobre}
                            </Text>
                    </View>

                </> }

                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      width: "100%",
                      marginTop: 24,
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  ]}
                  onPress={() => setOpenModal(false)}
                >
                  <Text style={[styles.text, { color: "black" }]}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
            <ViewContainer>
                        <Picker style={styles.drop}
                                selectedValue={select}
                                onValueChange={(itemValue, itemIndez) => 
                                    setSelect(itemValue)
                                }
                            >   
                                <Picker.Item label="animes" value="animes" />
                                <Picker.Item label="personagens" value="personagens" />
                            </Picker>

                        <ViewInfos>
                            {dados.map((item, index)=>{
                                return(
                                    <View key={index} style={styles.viewInfos}>
                                        <View style={styles.viewDetails}>
                                            < View style={styles.viewImage}>
                                                    <Image
                                                        style={styles.img}
                                                        src={item.avatar}
                                                        />
                                                        <View>
                                                            <Text style={styles.title}> {item.nome} </Text>
                                                        </View>
                                                </View>
                                                    <View >
                                                        <Text style={styles.titlePontos}>{item.votos}</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={()=> handleModal(item)}>
                                                        <AntDesign name="profile" size={24} color="white" />
                                                    </TouchableOpacity>
                                                </View>
                                        </View>
                                )
                            })}
                        </ViewInfos>

            </ViewContainer>
        </BackgroundImage>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    viewInfos: {
        width: '97%',
        height: 'auto',
        marginTop: '3%',
        borderWidth: 1,
        // borderColor: '#F4A460',
        // border-image: url("./132d0b11f96dcffaa700966900312a52.jpg") 150 round;
    },
    viewDetails: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#0B5345'
    },
    viewImage: {
        width: 210,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10%'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginLeft: '3%'
    },
    titlePontos: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginStart: -45,
        marginTop: 2,
        marginBottom: 2,
        objectFit: 'contain'

    },
    drop:{
        width: '95%',
        height: 50,
        borderWidth: 2,
        borderColor: 'gray',
        padding: 8,
        color:'#000',
        marginBottom: 4,
        backgroundColor:'white'
    },

    desc: {
        fontSize: 12,
        lineHeight: 24,
        opacity: 0.7,
        textAlign:'left'
      },
      titleModal: {
        fontWeight: "600",
        fontSize: 14,
        marginBottom: 12,
        textAlign:'center'
      },
      card: {
        width: "90%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 8,
      },
      content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      text: {
        fontWeight: "600",
        fontSize: 16,
        color: "white",
      },
      button: {
        width: "30%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        borderRadius: 8,
      },
      
});
