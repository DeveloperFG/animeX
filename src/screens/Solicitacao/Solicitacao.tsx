import React, { useState, useEffect} from 'react';
import { Keyboard, ToastAndroid   } from 'react-native';

import { db } from '../../../db/firebaseConnection';
import {collection, addDoc, getDocs } from 'firebase/firestore'


import { Container, ViewButtons, InputSubmit, 
         ButtomSubmit, TituloSubmit, BackgroundImage } from './styles'

import {ToastSucess } from '../../utils/Alertas/Toast'
import { ToastInfo } from '../../utils/Alertas/Toast';

export default function Solicitacao() {

       const [nome, setNome] = useState('')
       const [descricao, setDescricao] = useState('')

      
    async function handleSolicitacao(){

        if(nome == '' || descricao == ''){
            ToastInfo()
            return;
        }
        await addDoc(collection(db, 'solicitacoes'), {
            nome: nome,
            descricao: descricao,
        })
        .then(()=>{
            ToastSucess()
            ToastAndroid.show('Prazo máximo para inclusão do personagem de 24 horas...' + " " ,  ToastAndroid.LONG)
            console.log("Solicitado com sucesso!")
            Keyboard.dismiss();
            setNome('')
            setDescricao('')
        })
        .catch((erro)=>{
            ToastAndroid.show('Deu algum erro' + erro + " " ,  ToastAndroid.SHORT)
            console.log(erro)
        })
    }

    return (
        <BackgroundImage source={require('../../utils/img/fundoSolicit.png')} >
            <Container>
                <ViewButtons>
                    <InputSubmit
                        placeholder="Nome do anime ou personagem"
                        placeholderTextColor="#808080"
                        value={nome}
                        onChangeText={(txt)=> setNome(txt)}
                    />

                    <InputSubmit
                        placeholder="Faça uma descrição"
                        placeholderTextColor="#808080"
                        value={descricao}
                        onChangeText={(txt)=> setDescricao(txt)}
                    />

                    <ButtomSubmit onPress={handleSolicitacao}>
                        <TituloSubmit>Fazer solicitação</TituloSubmit>
                    </ButtomSubmit>

                </ViewButtons>
            </Container>
        </BackgroundImage>
    );
}
