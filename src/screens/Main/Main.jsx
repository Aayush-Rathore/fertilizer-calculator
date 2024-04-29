import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Seperator from "../../components/Seperators";
import Icon from "react-native-vector-icons/Feather";

const menus = [
  {
    topSectionTitle: "फसलें",
    topSectionLogo: require("../../../assets/land.png"),
    cardTitle: "शुरू करने के लिए फसल चुने",
    bottomSectionTitle: "फसल सूची",
    navigate: "Crops",
  },

  {
    topSectionTitle: "उर्वरक",
    topSectionLogo: require("../../../assets/fertilizer.png"),
    cardTitle: "उर्वरक की जानकारी",
    bottomSectionTitle: "उर्वरक सूची",
    navigate: "Fertilizer",
  },
];

const ScreenCard = ({ iteam, onClick }) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.card}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionTitle}>{iteam.topSectionTitle}</Text>
          <Image style={styles.topSectionLogo} source={iteam.topSectionLogo} />
        </View>
        <Text style={styles.cardTitle}>{iteam.cardTitle}</Text>
        {iteam.bottomSectionTitle && (
          <>
            <Seperator color="#777777" />
            <View style={styles.bottomSection}>
              <Text style={styles.bottomSectionTitle}>
                {iteam.bottomSectionTitle}
              </Text>
              <Icon name="chevron-right" size={30} color="#5CD14C" />
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/mainLogo.png")}
        style={{ width: 244, height: 244 }}
      />
      <ScrollView>
        {menus.map((iteam, index) => {
          return (
            <ScreenCard
              iteam={iteam}
              key={index}
              onClick={() => navigation.navigate(iteam.navigate)}
            />
          );
        })}
        <TouchableWithoutFeedback>
          <View style={styles.otherCard}>
            <Text style={styles.cardTitle}>मौसम की जानकारी</Text>
            <Icon name="chevron-right" size={30} color="#5CD14C" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.otherCard}>
            <Text style={styles.cardTitle}>संपर्क करें</Text>
            <Icon name="chevron-right" size={30} color="#5CD14C" />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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

  otherCard: {
    backgroundColor: "#26282A",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default Main;
