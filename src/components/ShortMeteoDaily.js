import React from 'react'
import {Card, Layout, Text} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";
import moment from "moment";

export const ShortMeteoDaily = ({weather}) => {
    const date = moment.unix(weather.dt).format('DD/MM/YYYY');

    return(
        <Card>
            <Layout style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'left'}}>
                <Text category={'h4'}>{weather.temp.day}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'http://openweathermap.org/img/wn/10d@4x.png',
                    }}
                />
                <Text category={'h4'}>{date}</Text>
            </Layout>
        </Card>
    );
};

const styles = StyleSheet.create({
    tinyLogo: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
});