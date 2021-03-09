import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import {
    getCurrentFromOpenWeatherAPIWithLatLon,
    getCurrentFromOpenWeatherAPIWithName,
    getOneCallFromOpenWeatherAPI,
} from "../api/OpenWeatherAPI";
import {Button, Divider, Layout,TopNavigation, Input, Text} from "@ui-kitten/components";
import {SearchIcon} from "../../assets/Icons";
import {CurrentWeather} from "./CurrentWeather";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {usePermissions} from "expo-permissions";

const units = 'metric';

const Home = ({navigation}) =>  {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [city, setCity] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getCurrentWeather = () => {
        setLoading(true);
        getCurrentFromOpenWeatherAPIWithName(city, units)
            .then((json) => setData(json))
            .catch((error) => console.log('Error : ' + error))
            .finally(() => setLoading(false));
    };

    const getCurrentWeatherWithLatLon = () => {
        setLoading(true);
        getCurrentFromOpenWeatherAPIWithName(city, units)
            .then((json) => setData(json))
            .catch((error) => console.log('Error : ' + error))
            .finally(() => setLoading(false));
    }


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
                .catch((error) => console.log('Error : ' + error))
                .finally(() => setLoading(false));
        })();


    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title={'MyApp'} alignment={'center'}/>
            <Divider/>
            <Input
                placeholder='City'
                value={city}
                onChangeText={(text) => setCity(text)}
                accessoryRight={SearchButton}
            />
            <Layout style={styles.container}>
                {
                    data?
                        <CurrentWeather navigation={navigation} current={data}/> :
                        <ActivityIndicator/>
                }
            </Layout>
        </SafeAreaView>

    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

