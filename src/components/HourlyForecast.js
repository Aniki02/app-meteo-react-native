import React, {useState} from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {ScrollView} from "react-native";
import {ShortMeteoHourly} from "./ShortMeteoHourly";
import {getHourlyFromOpenWeatherAPIWithName} from "../api/OpenWeatherAPI";

const units = 'metric';

export const HourlyForecast = ({weather, navigation}) => {
    return (
        <Layout>
            <Text category={'h2'}>Hourly Forecast</Text>
            <ScrollView horizontal>
                <ShortMeteoHourly data={weather[0]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[1]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[2]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[3]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[4]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[5]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[6]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[7]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[8]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[9]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[10]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[11]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[12]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[13]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[14]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[15]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[16]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[17]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[18]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[19]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[20]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[21]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[22]} navigation={navigation}/>
                <ShortMeteoHourly data={weather[23]} navigation={navigation}/>
            </ScrollView>
        </Layout>
    );
}
