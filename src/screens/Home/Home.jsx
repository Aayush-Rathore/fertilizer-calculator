import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../../components/Button";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import useStore from "../../dataStore/zustand";

const Home = ({ navigation }) => {
  const [Error, setError] = useState(null);
  // const [location, setLocation] = useState(null);
  const setLocation = useStore((state) => state.setLocation);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const location = (await getCurrentPositionAsync({})).coords;

      setLocation({
        lat: location.latitude,
        long: location.longitude,
      });
    })();
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/mainLogo.png")}
        style={{ width: 350, height: 350 }}
      />
      <View style={styles.title}>
        <Text style={styles.title1}>Fertilizer</Text>
        <Text style={styles.title2}>Calculator</Text>
      </View>
      <Button
        style={styles.button}
        btnText={styles.btnText}
        onClick={() => navigation.navigate("Main")}
      >
        शुरू करें
      </Button>
      <Image
        style={styles.clgLogo}
        width={300}
        height={50}
        source={require("../../../assets/cvru.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#111111",
  },

  img: {
    width: 350,
    height: 350,
  },

  title: {
    alignItems: "center",
    marginBottom: "7%",
  },

  title1: {
    fontSize: 55,
    fontWeight: "900",
    color: "white",
  },

  title2: {
    fontSize: 55,
    fontWeight: "400",
    color: "#5CD14C",
  },

  button: {
    backgroundColor: "#5CD14C",
    minWidth: "70%",
    height: "8%",
    borderRadius: 50,
    marginBottom: "25%",
  },

  btnText: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },

  clgLogo: {
    width: 300,
  },
});

export default Home;
