import ViewProvider from "./View.Provider";
import NavigationProvider from "./Navigation.Provider";
import ReactQueryProvider from "./ReactQuery.Provider";

const Provider = ({ children }) => {
  return (
    <ViewProvider>
      <ReactQueryProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ReactQueryProvider>
    </ViewProvider>
  );
};

export default Provider;
