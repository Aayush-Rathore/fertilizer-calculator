import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Seperator from "../../components/Seperators";
import Icon from "react-native-vector-icons/Feather";

const menus = [
  {
    id: 1,
    topSectionTitle: "फसलें",
    topSectionLogo: require("../../../assets/land.png"),
    cardTitle: "शुरू करने के लिए फसल चुने",
    bottomSectionTitle: "फसल सूची",
  },

  {
    id: 2,
    topSectionTitle: "उर्वरक",
    topSectionLogo: require("../../../assets/fertilizer.png"),
    cardTitle: "उर्वरक की जानकारी",
    bottomSectionTitle: "उर्वरक सूची",
  },
];

const ScreenCard = ({ item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("Hy");
      }}
    >
      <View style={styles.card}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionTitle}>{item.topSectionTitle}</Text>
          <Image style={styles.topSectionLogo} source={item.topSectionLogo} />
        </View>
        <Text style={styles.cardTitle}>{item.cardTitle}</Text>
        {item.bottomSectionTitle && (
          <>
            <Seperator color="#777777" />
            <View style={styles.bottomSection}>
              <Text style={styles.bottomSectionTitle}>
                {item.bottomSectionTitle}
              </Text>
              <Icon name="chevron-right" size={30} color="#5CD14C" />
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Main = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/mainLogo.png")}
      />
      <FlatList
        data={menus}
        renderItem={ScreenCard}
        key={(data) => data.index}
        contentContainerStyle={{ height: "auto" }}
      />
      <View style={styles.otherCards}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#111111",
    paddingHorizontal: 28,
  },

  img: {
    width: 244,
    height: 244,
  },

  card: {
    backgroundColor: "#26282A",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "column",
    gap: 13,
    marginBottom: 20,
  },

  topSection: {
    gap: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  topSectionTitle: {
    color: "#ffffff",
    fontSize: 16,
  },

  topSectionLogo: {
    width: 40,
    height: 40,
  },

  cardTitle: {
    fontSize: 24,
    color: "white",
  },

  bottomSection: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  bottomSectionTitle: {
    color: "white",
  },

  otherCards: {
    width: "100%",
    backgroundColor: "#111111",
  },
});

export default Main;
