import {
  Button,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Contact = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111111",
        alignItems: "center",
        flexDirection: "column",
        paddingVertical: 14,
        paddingHorizontal: 38,
        gap: 10,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
          backgroundColor: "#26282A",
          paddingVertical: 20,
          paddingHorizontal: 25,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <Image
          source={require("../../../assets/cvruLogo.png")}
          style={{ width: 150, height: 150 }}
        />
        <Image
          source={require("../../../assets/cvruName.png")}
          style={{ width: "100%", height: 60 }}
        />
      </View>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#26282A",
          borderRadius: 10,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
        onPress={() => {
          Linking.openURL(`tel:+919098546675`);
          console.log("Hello");
        }}
      >
        <>
          <Icon name="phone-call" size={25} color={"white"} />
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            +91 90985 46675
          </Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#26282A",
          borderRadius: 10,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
        onPress={() => {
          const url = `sms:+919098546675`;
          Linking.openURL(url);
        }}
      >
        <>
          <Icon name="mail" size={25} color={"white"} />
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            aayu.r.2003@gmail.com
          </Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#26282A",
          borderRadius: 10,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
        onPress={() => {
          Linking.openURL("https://bento.me/aayu-r");
        }}
      >
        <>
          <Icon name="globe" size={25} color={"white"} />
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            Website
          </Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default Contact;
