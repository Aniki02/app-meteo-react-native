import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {ScrollView} from "react-native";
import {CardHourly} from "./CardHourly";

const units = 'metric';

export const HourlyForecast = ({weather, navigation}) => {
    return (
        <Layout>
            <Text category={'h2'}>Hourly Forecast</Text>
            <ScrollView horizontal>
                <CardHourly data={weather[0]} navigation={navigation}/>
                <CardHourly data={weather[1]} navigation={navigation}/>
                <CardHourly data={weather[2]} navigation={navigation}/>
                <CardHourly data={weather[3]} navigation={navigation}/>
                <CardHourly data={weather[4]} navigation={navigation}/>
                <CardHourly data={weather[5]} navigation={navigation}/>
                <CardHourly data={weather[6]} navigation={navigation}/>
                <CardHourly data={weather[7]} navigation={navigation}/>
                <CardHourly data={weather[8]} navigation={navigation}/>
                <CardHourly data={weather[9]} navigation={navigation}/>
                <CardHourly data={weather[10]} navigation={navigation}/>
                <CardHourly data={weather[11]} navigation={navigation}/>
                <CardHourly data={weather[12]} navigation={navigation}/>
                <CardHourly data={weather[13]} navigation={navigation}/>
                <CardHourly data={weather[14]} navigation={navigation}/>
                <CardHourly data={weather[15]} navigation={navigation}/>
                <CardHourly data={weather[16]} navigation={navigation}/>
                <CardHourly data={weather[17]} navigation={navigation}/>
                <CardHourly data={weather[18]} navigation={navigation}/>
                <CardHourly data={weather[19]} navigation={navigation}/>
                <CardHourly data={weather[20]} navigation={navigation}/>
                <CardHourly data={weather[21]} navigation={navigation}/>
                <CardHourly data={weather[22]} navigation={navigation}/>
                <CardHourly data={weather[23]} navigation={navigation}/>
            </ScrollView>
        </Layout>
    );
}
