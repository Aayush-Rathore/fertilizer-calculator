import Providers from './src/providers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Providers>
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
        <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: () => <Icon name='home' size={25} color="#DDB130" /> }} />
        <Tab.Screen name="back" component={Home} options={{ tabBarIcon: () => <Icon name="home" size={25} color="#DDB130" />, tabBarHideOnKeyboard: true }} />
      </Tab.Navigator>
    </Providers >
  );
}
