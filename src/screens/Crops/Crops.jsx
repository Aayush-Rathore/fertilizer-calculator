import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { crops } from "../data/data";
import Icon from "react-native-vector-icons/Feather";

const Crops = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={crops}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                navigation.navigate("Calculat", { data: item.values });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  borderRadius: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 50,
                  backgroundColor: "#26282a",
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.name}
                </Text>
                <Icon name="chevron-right" size={30} color="#5CD14C" />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});

export default Crops;
