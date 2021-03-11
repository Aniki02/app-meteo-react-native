import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import {
    getCurrentFromOpenWeatherAPIWithLatLon,
    getCurrentFromOpenWeatherAPIWithName, getOneCallFromOpenWeatherAPI,
} from "../../api/OpenWeatherAPI";
import {Button, Divider, Layout,TopNavigation, Input, Text} from "@ui-kitten/components";
import {SearchIcon} from "../../../assets/Icons";
import * as Location from 'expo-location';
import Weather from "../Forecast/Weather";
import {Colors} from "../../definitions/Colors";


const units = 'metric';

const Home = ({navigation}) =>  {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [city, setCity] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [globalWeather, setGlobalWeather] = useState(null);

    const getCurrentWeather = () => {
        setLoading(true);
        getCurrentFromOpenWeatherAPIWithName(city, units)
            .then((json) => setData(json))
            .catch((error) => console.log('Error : ' + error))
            .finally(() => setLoading(false));
    };

    const SearchButton = () => (
        <Button onPress={() => getCurrentWeather()} accessoryLeft={SearchIcon} appearance={'ghost'}/>
    );

    useEffect(() => {
        (async () => {
            setLoading(true);
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            getCurrentFromOpenWeatherAPIWithLatLon(location.coords.latitude, location.coords.longitude, units)
                .then((json) => setData(json))
                .catch((error) => console.log('Eor : ' + error))
                .finally(() => setLoading(false));
        })();


    }, []);

    useEffect(() => {
        if (data) {
            getOneCallFromOpenWeatherAPI(data.coord.lat, data.coord.lon, units)
                .then((json) => setGlobalWeather(json))
                .catch((error) => console.log('Err : ' + error));
        }
    }, [data]);

    const HandleError = () => {

        if (data && data.cod === 404){
            return (
                <Text>City name dosn't exists</Text>
            );
        } else {
            if (data && globalWeather){
                return (
                    <Weather navigation={navigation} current={data} globalWeather={globalWeather}/>
                );
            } else {
                return (
                    <ActivityIndicator />
                )
            }

        }
    }

    console.log(data);

    return (
        <Layout style={styles.container}>
                <TopNavigation style={{backgroundColor: Colors.mainAppColor}}/>
                <Divider/>
                <Input
                    placeholder='City'
                    value={city}
                    onChangeText={(text) => setCity(text)}
                    accessoryRight={SearchButton}
                />
                <HandleError />

        </Layout>

    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

