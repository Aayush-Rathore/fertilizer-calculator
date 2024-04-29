import { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { crops } from "../data/data";
import Icon from "react-native-vector-icons/Feather";
import { speak, stop } from "expo-speech";
import { useIsFocused } from "@react-navigation/native";

const Crops = ({ navigation }) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) stop();
    else {
      speak("कृपया, अपनी फसल का चयन करें!", {
        language: "hi",
        pitch: 1,
        rate: 0.8,
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={crops}
        renderItem={(data) => {
          return (
            <TouchableWithoutFeedback
              key={data.index}
              onPress={() => {
                navigation.navigate("Calculat", { data: data.item.values });
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
                  {data.item.name}
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
