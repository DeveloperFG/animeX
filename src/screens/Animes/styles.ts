
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(SafeAreaView)`
    width: 100%;
    height: 100%;
    justify-content: space-around;
   
`;

export const Imagem = styled.Image`
    width: 130%;
    height: 50%;
    justify-content: space-around;
    object-fit: contain ;

`;

export const ViewAnimes = styled.View`
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
`;

export const Tittle = styled.Text`
    color: #052620;
    font-family: sans-serif;
    font-weight: bold;
`;

export const ViewItens = styled.View`
    width: 100%;
    height: 5%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
  
`;

export const ButtonImg = styled.TouchableOpacity`
    width: 140%;
    height: 140%;
    align-items: center;
    justify-content: center;
    margin-top: -7%;
`;


export const ViewDetails = styled.View`
    width: 100%;
    height: 40%;
    justify-content: space-around;
    align-items: center;

`;

export const ViewSetas = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ViewStar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100px;
`;



