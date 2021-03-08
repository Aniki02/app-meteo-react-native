import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView, Image, ScrollView} from 'react-native';
import {
    getCurrentFromOpenWeatherAPIWithId,
    getCurrentFromOpenWeatherAPIWithName,
    getHourlyFromOpenWeatherAPIWithName
} from "../api/OpenWeatherAPI";
import {Button, Divider, Layout, Text, TopNavigation, Input, Icon, List, ListItem, Card} from "@ui-kitten/components";
import {SearchIcon} from "../../assets/Icons";
import {CurrentWeather} from "./CurrentWeather";
import {HourlyForecast} from "./HourlyForecast";
import {DailyForecast} from "./DailyForecast";
import {oneCall} from "../helpers/oneCall";

const units = 'metric';

const Home = ({navigation}) =>  {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(oneCall);
    const [city, setCity] = useState('Fameck');

    /*useEffect(() => {
        if (city.length >= 3){
            getCurrentFromOpenWeatherAPIWithName(city, units)
                .then((json) => setData(json))
                .catch((error) => console.log('Error : ' + error))
                .finally(() => setLoading(false));
        }
    }, [city]);*/

    const getOneCall = (lat, lon) => {

    };

    const SearchButton = () => (
        <Button onPress={() => getOneCall} accessoryLeft={SearchIcon} appearance={'ghost'}/>
    );

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
                <CurrentWeather navigation={navigation} city={city} weather={data}/>
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

