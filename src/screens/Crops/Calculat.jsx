import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  ToastAndroid,
} from "react-native";
import Button from "../../components/Button";
import Seperator from "../../components/Seperators";
import { speak, stop } from "expo-speech";
import { useIsFocused } from "@react-navigation/native";

const Calculat = ({ route }) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) stop();
    else {
      speak("आपकी कितनी भूमि है, दर्ज करे!", {
        language: "hi",
        pitch: 1,
        rate: 0.8,
      });
    }
  }, []);
  const [value, setValue] = useState();
  const [mode, setMode] = useState(true);
  const [showValues, setShowValues] = useState(false);

  const [urea, setUrea] = useState();
  const [dap, setDap] = useState(0);
  const [mop, setMop] = useState();

  const { data } = route.params;

  const calculatValues = () => {
    if (value <= 0) {
      ToastAndroid.show("कृपया, पहले अपनी भूमि दर्ज करे!", ToastAndroid.CENTER);
      speak("कृपया, पहले अपनी भूमि दर्ज करे!", {
        language: "hi",
        pitch: 1,
        rate: 0.8,
      });
    } else {
      Keyboard.dismiss();
      setShowValues(true);
      speak(
        `आपको ${urea} किलोग्राम यूरिया, ${dap} किलोग्राम डीएपी ओर ${mop} किलोग्राम एमओपी की जरुरत है|`,
        {
          language: "hi",
          pitch: 1,
          rate: 0.8,
        }
      );
    }
  };

  useEffect(() => {
    const P_dap = Math.round((100 / 46) * data[1] * +value);
    const N_dap = Math.round((P_dap * 18) / 100);
    const N_urea = Math.round((100 / 46) * (data[0] - N_dap) * +value);
    const K_mop = Math.round((100 / 58) * data[2] * +value);
    if (mode) {
      setUrea(N_urea);
      setDap(P_dap);
      setMop(K_mop);
    } else {
      setUrea(Math.round(N_urea / 2.47));
      setDap(Math.round(P_dap / 2.47));
      setMop(Math.round(K_mop / 2.47));
    }
  }, [value, mode]);

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
        placeholder="आप के पास कितनी जमीन है"
        placeholderTextColor="white"
        style={styles.input}
        inputMode="numeric"
        onChangeText={(text) => {
          setValue(text);
        }}
        onFocus={() => {
          setShowValues(false);
        }}
        value={value}
      />
      <Button
        style={styles.calcBtn}
        btnText={styles.calcBtnText}
        onClick={calculatValues}
      >
        मात्रा देखें
      </Button>
      {showValues && (
        <View style={styles.calcValue}>
          <Text style={{ fontSize: 18, color: "white", marginBottom: 5 }}>
            आवश्यक उर्वरक खुराक !
          </Text>
          <Seperator color="#777777" />
          <View
            style={{
              paddingVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                marginBottom: 5,
                textAlign: "center",
              }}
            >
              यूरिया की मात्रा: {urea} किलोग्राम
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                marginBottom: 5,
                textAlign: "center",
              }}
            >
              डी.ए.पी की मात्रा: {dap} किलोग्राम
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                marginBottom: 5,
                textAlign: "center",
              }}
            >
              एम.ओ.पी की मात्रा: {mop} किलोग्राम
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#26282A",
    borderRadius: 10,
    minHeight: 50,
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
    minHeight: 55,
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
    minHeight: 50,
  },

  calcBtnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  calcValue: {
    flex: 1 / 3,
    width: "100%",
    backgroundColor: "#26282A",
    height: 100,
    padding: 14,
    borderRadius: 10,
  },
});

export default Calculat;
