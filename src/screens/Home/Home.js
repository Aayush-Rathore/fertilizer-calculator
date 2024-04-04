import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const Home = () => {
    return (

        <View style={styles.container}>

            <Image
                style={styles.Img}
                source={require("../../../assets/mainLogo.png")} />

            <Text style={styles.title}>Fertilizer</Text>
            <Text style={styles.Cal}>Calculator</Text>



            <LinearGradient
                // Button Linear Gradient
                colors={['#DDB130', '#DDB130', '#DDB130']}
                style={styles.button}>
                <Text style={styles.text}>Get Start</Text>
            </LinearGradient>


            <Image
                style={styles.imgcvru}
                
                source={require("../../../assets/cvru.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A98B9',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    button: {
        padding: 15,
        width: 260,
        alignItems: 'center',
        marginTop:40,
        borderRadius: 50,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 25,
        letterSpacing: 2,
        fontWeight: '600',
        color: 'white',
    },

    title: {

        fontSize: 60,
        fontWeight: '900',
        marginTop: 10,
        color: '#f8f8ff'
    },



    Cal: {
        fontSize: 60,
        letterSpacing: 1,
        color: '#DDB130',
        marginTop:-10,
        fontWeight: "400"
    },

    Img: {

        width: 350,
        height: 350,

    },

    imgcvru: {


        marginTop: 50,

    }

});

export default Home;