import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const ViewProvider = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"#111111"} />
      {children}
    </SafeAreaProvider>
  );
};

export default ViewProvider;
