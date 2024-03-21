import ViewProvider from "./View.Provider";
import NavigationProvider from "./Navigation.Provider";

const Provider = ({ children }) => {
    return (
        <ViewProvider>
            <NavigationProvider>
                {children}
            </NavigationProvider>
        </ViewProvider>
    )
}

export default Provider;