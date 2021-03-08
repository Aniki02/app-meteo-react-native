import React from 'react'
import {Card, Layout, Text} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";
import moment from 'moment';

export const ShortMeteoHourly = ({data}) => {
    const hour = moment.unix(data.dt).format('HH:mm');
    return (
        <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card>
                <Text category={'h4'}>{hour}</Text>
                <Text category={'h4'}>{data.temp} °C</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png',
                    }}
                />
                <Text category={'h6'}>{data.weather[0].description}</Text>
            </Card>

        </Layout>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
});

