import Providers from './src/providers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Main from './src/screens/Main/Main';
import Crops from './src/screens/Crops/Crops';
import Icon from "react-native-vector-icons/Feather";
import { Text, View } from 'react-native';
import { HeaderBackButton } from "@react-navigation/elements"
import Calculat from './src/screens/Crops/Calculat';
import Contact from './src/screens/Contact/Contact';
import Fertilizer from './src/screens/Fertilizer/Fertilizer';
import Weather from './src/screens/Weather/weather';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Providers>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Crops" component={CropScreens} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Fertilizer" component={Fertilizer} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </Providers >
  );
}

const CropScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{
      headerShown: true, headerStyle: { backgroundColor: "#1D1919" }, headerLargeTitleShadowVisible: false, headerSearchBarOptions: {
        headerIconColor: "white", textColor: "white", hideWhenScrolling: true, obscureBackground: true, shouldShowHintSearchIcon: false, tintColor: "white", placeholder: "", inputType: "text"
      },
      headerLeft: () => {
        return (
          <HeaderBackButton
            onPress={() => navigation.goBack()}
            backImage={() => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon name="chevron-left" size={30} color="#5CD14C" />
                  <Text style={{ color: "#5CD14C", fontWeight: "600", fontSize: 20 }}>अपनी फसल चुनें</Text>
                </View>
              )
            }} />
        )
      },

    }}>
      <Stack.Screen name='selectCrops' component={Crops} />
      <Stack.Screen name='Calculat' component={Calculat} options={{
        headerLeft: () => {
          return (
            <HeaderBackButton
              onPress={() => navigation.navigate("selectCrops")}
              backImage={() => {
                return (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="chevron-left" size={30} color="#5CD14C" />
                    <Text style={{ color: "#5CD14C", fontWeight: "600", fontSize: 20 }}>वापस जाओ</Text>
                  </View>
                )
              }} />
          )
        },
      }} />
    </Stack.Navigator>
  )
}