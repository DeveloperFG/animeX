import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, TouchableOpacity, Text, Image, View} from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const ViewPersonagens = styled(SafeAreaView)`
    width: 98%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const ViewImagem = styled(View)`
    /* margin-top: -50%; */
`;


export const Imagem = styled(Image)`
    width: 130%;
    height: 50%;
    justify-content: space-around;
    object-fit: contain ;

`;

export const ImagemVs = styled(Image)`
    width: 80px;
    height: 80px;
    position: relative;
    margin-top: -50%;
`;

export const ViewButton = styled(View)`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: brown; */
`;

export const ButtonImg = styled(TouchableOpacity)`
    width: 110px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Tittle = styled(Text)`
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
`;
