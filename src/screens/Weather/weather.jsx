import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Seperator from "../../components/Seperators";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import useStore from "../../dataStore/zustand";
import axios from "axios";
import { speak, stop } from "expo-speech";
import { useIsFocused } from "@react-navigation/native";

const dat = [1, 2, 3, 4, 5];

const Weather = ({ navigation }) => {
  const isFocused = useIsFocused();
  const location = useStore((state) => state.location);
  const [locationInfo, setLocationInfo] = useState({
    city: "खंडवा",
    sunrise: "5:52am",
    sunset: "6:50pm",
    dayName: "बुधवार",
    fullDate: "01/05/2024",
    minTemp: 24,
    maxTemp: 40,
    currentTemp: 34,
  });

  const [Error, setError] = useState(null);

  async function fetchWeatherData() {
    console.log(location);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.long}&appid=c526540830782a48ffa5130032a6d585`
      );

      const city = response.data.city.name;
      const sunriseTimestamp = response.data.city.sunrise;
      const sunsetTimestamp = response.data.city.sunset;
      const minTemp = response.data.list[0].main.temp_min;
      const maxTemp = response.data.list[0].main.temp_max;
      const currentTemp = response.data.list[0].main.temp;

      const options = { hour: "2-digit", minute: "2-digit", hour12: true };

      const sunriseDate = new Date(sunriseTimestamp * 1000).toLocaleTimeString(
        "hi",
        options
      );
      const sunsetDate = new Date(sunsetTimestamp * 1000).toLocaleTimeString(
        "hi",
        options
      );
      const dayName = new Date(sunriseTimestamp * 1000).toLocaleString("hi", {
        weekday: "long",
      });
      const fullDate = new Date(sunriseTimestamp * 1000).toLocaleString("hi", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      // Convert temperatures from Kelvin to Celsius
      const minTempCelsius = (minTemp - 273.15).toFixed(0);
      const maxTempCelsius = (maxTemp - 273.15).toFixed(0);
      const currentTempCelsius = (currentTemp - 273.15).toFixed(0);

      setLocationInfo({
        city,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        dayName,
        fullDate,
        minTemp: minTempCelsius,
        maxTemp: maxTempCelsius,
        currentTemp: currentTempCelsius,
      });
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  const speakFun = async () => {
    if (!isFocused) stop();
    else {
      await speak(
        `आज का न्यूनतम तापमान ${locationInfo.minTemp} डिग्री सेल्सियस है, और आज का अधिकतम तापमान ${locationInfo.maxTemp} डिग्री सेल्सियस है,`,
        {
          language: "hi",
          pitch: 1,
          rate: 0.8,
        }
      );
      await speak(
        `आज सूर्योदय ${locationInfo.sunrise} को हुआ था, सूर्यास्त ${locationInfo.sunset} को होगा`,
        {
          language: "hi",
          pitch: 1,
          rate: 0.8,
        }
      );
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#111111",
          flex: 1,
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require("../../../assets/weather.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={{ justifyContent: "center", gap: 5 }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "500",
              color: "white",
              textAlign: "center",
            }}
          >
            {locationInfo.currentTemp}&deg;
          </Text>
          <Text style={styles.text}>{locationInfo.city}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 50,
            }}
          >
            <Text style={styles.text}>
              न्यूनतम: {locationInfo.minTemp}&deg;
            </Text>
            <Text style={styles.text}>अधिकतम: {locationInfo.maxTemp}&deg;</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#26282A",
            borderRadius: 20,
            paddingHorizontal: 27,
            paddingVertical: 17,
            marginBottom: 46,
          }}
        >
          <Image
            source={require("../../../assets/tree.png")}
            style={{ width: 60, height: 60 }}
          />
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              सूर्योदय {locationInfo.sunrise}
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              सूर्यास्त {locationInfo.sunset}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#26282A",
            borderRadius: 20,
            marginBottom: 46,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: 27,
              paddingVertical: 17,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              {locationInfo.fullDate}
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              {locationInfo.dayName}
            </Text>
          </View>
          <Seperator color="#777777" />
          <TouchableWithoutFeedback onPress={speakFun}>
            <Icon
              name="play"
              size={100}
              color="#5CD14C"
              style={{ marginVertical: 50 }}
            />
          </TouchableWithoutFeedback>
          {/* <View style={{ paddingHorizontal: 27 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: 32,
              }}
            >
              <View style={styles.weatherLogs}>
                <Text style={styles.weatherLogText}>19&deg;C</Text>
                <Image
                  source={require("../../../assets/weather.png")}
                  style={{ width: 66, height: 66 }}
                />
                <Text style={styles.weatherLogText}>12am</Text>
              </View>
              <View style={styles.weatherLogs}>
                <Text style={styles.weatherLogText}>19&deg;C</Text>
                <Image
                  source={require("../../../assets/weather.png")}
                  style={{ width: 66, height: 66 }}
                />
                <Text style={styles.weatherLogText}>12am</Text>
              </View>
              <View style={styles.weatherLogs}>
                <Text style={styles.weatherLogText}>19&deg;C</Text>
                <Image
                  source={require("../../../assets/weather.png")}
                  style={{ width: 66, height: 66 }}
                />
                <Text style={styles.weatherLogText}>12am</Text>
              </View>
            </View>
          </View> */}
        </View>
        {/* <View
          style={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#26282A",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontWeight: "900",
              width: "100%",
              paddingHorizontal: 27,
              paddingVertical: 17,
            }}
          >
            7-Days Forecasts
          </Text>
          <Seperator color="#777777" />
          <View
            style={{
              paddingVertical: 17,
            }}
          >
            <FlatList
              data={dat}
              horizontal={true}
              renderItem={(data) => {
                return (
                  <View style={styles.weatherForcast} key={data.index}>
                    <Text style={styles.weatherLogText}>19&deg;C</Text>
                    <Image
                      source={require("../../../assets/weather.png")}
                      style={{ width: 66, height: 66 }}
                    />
                    <Text style={styles.weatherLogText}>12am</Text>
                  </View>
                );
              }}
            />
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
  },

  weatherLogs: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },

  weatherLogText: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
  },

  weatherForcast: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
    paddingVertical: 26,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: "#111111",
    borderRadius: 60,
    alignItems: "center",
  },
});

export default Weather;
