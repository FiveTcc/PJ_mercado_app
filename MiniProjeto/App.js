import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./src/screens/StartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddItemScreen from "./src/screens/AddItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Start">
         <Stack.Screen name="Start" component={StartScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Lista de Compras" component={HomeScreen} />
         <Stack.Screen name="Adicionar Item" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}