import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as So from './styles'

export default function Opcao() {
    
    const navigation = useNavigation();

    return (
         <So.BackgroundImage source={require('../../utils/img/fundoOpcao.png')}>
                <So.ViewOpcao>
                    <So.ButtonImg onPress={() => navigation.navigate('Animes')} >
                        <So.Tittle>Batalha entre animes</So.Tittle>
                        <So.Imagem source={require('../../utils/img/anime.png')} />
                    </So.ButtonImg>

                    <So.ButtonImg onPress={() => navigation.navigate('Personagens')} >
                        <So.Tittle>Batalha entre personagens</So.Tittle>
                        <So.Imagem source={require('../../utils/img/personagens.png')} />
                    </So.ButtonImg>
                </So.ViewOpcao>
        </So.BackgroundImage>
    );
}

