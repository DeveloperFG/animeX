import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, ScrollView} from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const ViewContainer = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-top: 2px;

`;

export const ViewInfos = styled(ScrollView)`
    width: 97%;
    height: auto;
    margin-top: 3px;
    border-width: 1px;

`;
