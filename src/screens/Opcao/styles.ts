
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, TouchableOpacity, Text, Image} from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Imagem = styled(Image)`
    width: 130%;
    height: 50%;
    justify-content: space-around;
    object-fit: contain ;

`;

export const ViewOpcao = styled(SafeAreaView)`
    width: 98%;
    height: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const ButtonImg = styled(TouchableOpacity)`
    width: 125%;
    height: 125%;
    align-items: center;
    justify-content: center;
`;


export const Tittle = styled(Text)`
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
`;
