import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Seperator from "../../components/Seperators";

const Calculat = ({ route }) => {
  const [values, setValues] = useState();
  const [mode, setMode] = useState(true);
  const [doses, setDoses] = useState({
    Urea: 0,
    DAP: 0,
    MOP: 0,
  });

  const [urea, setUrea] = useState();
  const [dap, setDap] = useState();
  const [mop, setMop] = useState();

  const { data } = route.params;

  const calculatValues = () => {
    setUrea(Math.round((100 / 46) * data[2] * +values));
  };

  return (
    <View
      style={{
        paddingHorizontal: 28,
        backgroundColor: "#111111",
        flex: 1,
        gap: 20,
        paddingTop: 10,
      }}
    >
      <View style={styles.btnGroup}>
        <Button
          style={{
            ...styles.modeBtn,
            backgroundColor: `${mode ? "#26282A" : "#5CD14C"}`,
          }}
          btnText={styles.btnText}
          onClick={() => setMode(false)}
        >
          एकड़
        </Button>
        <Button
          style={{
            ...styles.modeBtn,
            backgroundColor: `${!mode ? "#26282A" : "#5CD14C"}`,
          }}
          btnText={styles.btnText}
          onClick={() => setMode(true)}
        >
          हेक्टर
        </Button>
      </View>
      <TextInput
        placeholder="Enter field area"
        placeholderTextColor="white"
        style={styles.input}
        inputMode="numeric"
        onChangeText={(text) => {
          setValues(text);
          calculatValues();
        }}
        value={values}
      />
      <Button style={styles.calcBtn} btnText={styles.calcBtnText}>
        मात्रा देखें
      </Button>
      <View style={styles.calcValue}>
        <Text style={{ fontSize: 18, color: "white", marginBottom: 5 }}>
          आवश्यक उर्वरक खुराक !
        </Text>
        <Seperator color="#777777" />
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            यूरिया की मात्रा {urea}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#26282A",
    borderRadius: 10,
    flex: 1 / 12,
  },

  modeBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  btnText: {
    color: "white",
    fontSize: 18,
  },

  input: {
    flex: 1 / 13,
    width: "100%",
    borderRadius: 6,
    fontSize: 15,
    color: "white",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "white",
  },

  calcBtn: {
    width: "100%",
    backgroundColor: "#5CD44C",
    borderRadius: 10,
    flex: 1 / 15,
  },

  calcBtnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  calcValue: {
    flex: 1 / 2,
    width: "100%",
    backgroundColor: "#26282A",
    height: 100,
    padding: 14,
    borderRadius: 10,
  },
});

export default Calculat;
