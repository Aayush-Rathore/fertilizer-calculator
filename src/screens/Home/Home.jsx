import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/mainLogo.png")}
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
    color: "#DDB130",
  },

  button: {
    backgroundColor: "#DDB130",
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
