import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import {getCityDataFromOpenWeatherAPIWithId} from "../api/OpenWeatherAPI";
import {Layout, Text} from "@ui-kitten/components";

const Home = () =>  {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const newYorkId = '5039192';

    useEffect(() => {
        getCityDataFromOpenWeatherAPIWithId(newYorkId)
            .then((json) => setData(json))
            .catch((error) => console.log('Error : ' + error))
            .finally(() => setLoading(false));
    }, []);

    console.log(data);

    return (
        <Layout style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <Text category={'h1'}>name : {data.name}, time zone : {data.timezone} </Text>
            )}
            <StatusBar style="auto" />
        </Layout>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
