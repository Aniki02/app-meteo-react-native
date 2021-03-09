import React from 'react'
import {Card, Layout, Text} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";

const units= 'metric';

export const CurrentWeather = ({navigation, current}) => {

    const goToDetails = (item) => {
        navigation.navigate('Details', {item: item})
    };

    return (
        <Card onPress={() => goToDetails(current)}>
            <Layout style={styles.current}>
                <Text category={'h1'} appearance={'hint'} style={styles.title}>Current Weather</Text>
                <Text category={'h4'}>{current.name}</Text>

                <Layout style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'http://openweathermap.org/img/wn/'+current.weather[0].icon+'@4x.png',
                        }}
                    />
                    <Text category={'h1'} style={styles.title}>{current.main.temp}°C</Text>
                </Layout>
                <Text category={'h4'}>{current.weather[0].description}</Text>
            </Layout>
        </Card>

    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
    },
    current:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
});

