import { StyleSheet, View } from "react-native";

const Seperator = (props) => {
  return (
    <View
      style={{
        ...styles.seperator,
        height: props.height ? props.height : 2,
        backgroundColor: props.color ? props.color : "white",
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
  },
});

export default Seperator;
