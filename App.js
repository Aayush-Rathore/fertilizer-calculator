import Providers from './src/providers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home/Home';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <Providers>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
      </Drawer.Navigator>
    </Providers>
  );
}
