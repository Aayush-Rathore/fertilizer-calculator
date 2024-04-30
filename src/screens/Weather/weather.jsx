import Button from "../../components/Button";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Weather = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#111111",
          flex: 1,
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require("../../../assets/weather.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={{ justifyContent: "center", gap: 5 }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "500",
              color: "white",
              textAlign: "center",
            }}
          >
            00&deg;
          </Text>
          <Text style={styles.text}>Khandwa</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 50,
            }}
          >
            <Text style={styles.text}>Min: 00&deg;</Text>
            <Text style={styles.text}>Max: 00&deg;</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#26282A",
            borderRadius: 20,
            paddingHorizontal: 27,
            paddingVertical: 17,
            marginBottom: 46,
          }}
        >
          <Image
            source={require("../../../assets/tree.png")}
            style={{ width: 60, height: 60 }}
          />
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              Sunrise 0:00 am
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>Sunset 0:00 pm</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#26282A",
            borderRadius: 20,
            paddingHorizontal: 27,
            paddingVertical: 17,
            marginBottom: 46,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Today</Text>
            <Text style={{ fontSize: 20, color: "white" }}>Today</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
  },
});

export default Weather;
