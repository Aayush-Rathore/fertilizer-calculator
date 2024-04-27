import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const BgProvider = ({ children }) => {
  return (
    <LinearGradient
      colors={["#4EA4B5", "#74B3BF", "#A0C1C8"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#56A6B6" },
});

export default BgProvider;
