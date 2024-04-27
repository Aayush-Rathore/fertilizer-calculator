import Providers from './src/providers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Main from './src/screens/Main/Main';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Providers>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </Providers >
  );
}
