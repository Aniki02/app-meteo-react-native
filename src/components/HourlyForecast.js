import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {ScrollView} from "react-native";
import {ShortMeteoHourly} from "./ShortMeteoHourly";

export const HourlyForecast = ({weather}) => {
    return (
        <Layout>
            <Text category={'h2'}>Hourly Forecast</Text>
            <ScrollView horizontal>
                <ShortMeteoHourly data={weather[0]}/>
                <ShortMeteoHourly data={weather[1]}/>
                <ShortMeteoHourly data={weather[2]}/>
                <ShortMeteoHourly data={weather[3]}/>
                <ShortMeteoHourly data={weather[4]}/>
                <ShortMeteoHourly data={weather[5]}/>
                <ShortMeteoHourly data={weather[6]}/>
                <ShortMeteoHourly data={weather[7]}/>
                <ShortMeteoHourly data={weather[8]}/>
                <ShortMeteoHourly data={weather[9]}/>
                <ShortMeteoHourly data={weather[10]}/>
                <ShortMeteoHourly data={weather[11]}/>
                <ShortMeteoHourly data={weather[12]}/>
                <ShortMeteoHourly data={weather[13]}/>
                <ShortMeteoHourly data={weather[14]}/>
                <ShortMeteoHourly data={weather[15]}/>
                <ShortMeteoHourly data={weather[16]}/>
                <ShortMeteoHourly data={weather[17]}/>
                <ShortMeteoHourly data={weather[18]}/>
                <ShortMeteoHourly data={weather[19]}/>
                <ShortMeteoHourly data={weather[20]}/>
                <ShortMeteoHourly data={weather[21]}/>
                <ShortMeteoHourly data={weather[22]}/>
                <ShortMeteoHourly data={weather[23]}/>
            </ScrollView>
        </Layout>
    );
}
