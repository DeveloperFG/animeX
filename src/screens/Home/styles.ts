import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, TouchableOpacity, Text} from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  margin-bottom: 5px;

`;


export const Container = styled(SafeAreaView)`
   height: 100%;
   flex: 1;
   background-color: #000;

`;

export const ViewProsseguir = styled(View)`
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    padding: 4px;

`;

export const ButtonProsseguir = styled(TouchableOpacity)`
   width: 70%;
   height: 30px;
   background-color: #052620;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
   margin: 2px;

   

`;

export const TituloProsseguir = styled(Text)`
   color: #fff;
   font-weight: bold;
`;


