import ViewProvider from "./View.Provider";
import NavigationProvider from "./Navigation.Provider";
import BgProvider from "./Bg.Provider";

const Provider = ({ children }) => {
  return (
    <ViewProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </ViewProvider>
  );
};

export default Provider;
