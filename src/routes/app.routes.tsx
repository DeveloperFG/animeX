import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../screens/Home/Home";
import Opcao from "../screens/Opcao/Opcao";
import Rank from "../screens/Rank/Rank";
import Solicitacao from "../screens/Solicitacao/Solicitacao";
import Personagens from "../screens/Personagens/Personagens";
import Animes from "../screens/Animes/Animes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator >
            <Screen options={{headerShown: false}}
                name="Home"
                component={Home}
            />

            <Screen  
                name="Opcão"
                component={Opcao}
            />

            <Screen  options={{ title: 'Rank dos Melhores' }}  
                name="Rank"
                component={Rank}
            />

            <Screen  options={{ title: 'Faça sua solicitação' }}  
                name="Solicitacao"
                component={Solicitacao}
            />

            <Screen  options={{ title: 'Quem é o mais forte?' }}  
                name="Personagens"
                component={Personagens}
            />

            <Screen  options={{ title: 'Qual desses e o melhor?' }}  
                name="Animes"
                component={Animes}
            />
        </Navigator>
    )
}