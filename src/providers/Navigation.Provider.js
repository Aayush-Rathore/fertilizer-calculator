import { NavigationContainer } from '@react-navigation/drawer';

const NavigationProvider = ({ children }) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}

export default NavigationProvider;