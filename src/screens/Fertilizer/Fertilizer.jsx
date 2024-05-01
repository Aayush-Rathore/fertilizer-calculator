import Button from "../../components/Button";
import { Text, View } from "react-native";

const Fertilizer = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#111111",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 25, color: "white" }}>
        उर्वरक संबंधी जानकारी उपलब्ध नहीं है
      </Text>
      <Button
        style={{
          backgroundColor: "#26282A",
          width: 200,
          height: 50,
          borderRadius: 10,
        }}
        btnText={{ fontSize: 20, color: "white", fontWeight: "600" }}
        onClick={() => navigation.navigate("Main")}
      >
        वापस जाए
      </Button>
    </View>
  );
};

export default Fertilizer;
