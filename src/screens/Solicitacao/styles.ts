import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, TouchableOpacity, Text, View, TextInput} from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


export const Container = styled(SafeAreaView)`
    flex: 1;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

`;

export const ViewButtons = styled(View)`
    width: 100%;
    height: 500px;
    align-items: center;
    justify-content: center;
`;

export const ButtomSubmit = styled(TouchableOpacity)`
    width: 95%;
    height: 10%;
    align-items: center;
    justify-content: center;
    background-color: #0B5345;
    margin-top: 2px;
`;

export const InputSubmit = styled(TextInput) `
    width: 95%;
    height: 10%;
    padding: 3px;
    color: black;
    margin-bottom: 4px;
    background-color: #fff;
    text-align: center;
    font-size: 16px;
    color: green;
`;

export const TituloSubmit = styled(Text)`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

