import React from 'react'
import {Card, Layout, Text} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";
import moment from 'moment';

export const CardHourly = ({data}) => {

    const hour = moment.unix(data.dt).format('HH:mm');

    return (
        <Layout style={styles.container}>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
});

