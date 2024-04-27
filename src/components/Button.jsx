import { TouchableWithoutFeedback, Text, View } from "react-native";

const Button = ({ onClick, style, btnText, children }) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={{
          ...style,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={btnText}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
