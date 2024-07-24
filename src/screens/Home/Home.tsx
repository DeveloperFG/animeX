import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Sh from './styles'

export default function Home() {

    const navigation = useNavigation();

   return (
        <Sh.Container>
            <Sh.BackgroundImage source={require('../../utils/img/animes.png')} />
               <Sh.ViewProsseguir>
                    <Sh.ButtonProsseguir  onPress={() => navigation.navigate('Opcão')}>
                        <Sh.TituloProsseguir> MODO DE BATALHA⚔️ </Sh.TituloProsseguir>
                    </Sh.ButtonProsseguir>
                    <Sh.ButtonProsseguir  onPress={() => navigation.navigate('Solicitacao')}>
                        <Sh.TituloProsseguir>SOLICITAÇÕES 💬</Sh.TituloProsseguir>
                    </Sh.ButtonProsseguir>
                    <Sh.ButtonProsseguir  onPress={() => navigation.navigate('Rank')}>
                        <Sh.TituloProsseguir> RANK DOS MELHORES 🚀 </Sh.TituloProsseguir>
                    </Sh.ButtonProsseguir>
            </Sh.ViewProsseguir> 
            <StatusBar style="auto" />
        </Sh.Container>
    );
}

