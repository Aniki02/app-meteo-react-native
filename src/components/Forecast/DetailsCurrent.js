import React from 'react'
import moment from "moment";
import {Divider, Layout, Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";

const DetailsCurrent = ({current}) => {

    const sunrise = moment.unix(current.sys.sunrise).format('HH:mm');
    const sunset = moment.unix(current.sys.sunset).format('HH:mm');

    return (
        <Layout style={styles.container}>
            <Layout style={styles.subContainer}>
                <Layout style={styles.line}>
                    <Text>LEVER</Text>
                    <Text category={'h3'}>{sunrise}</Text>
                </Layout>


                <Layout style={styles.line}>
                    <Text>COUCHER</Text>
                    <Text category={'h3'}>{sunset}</Text>
                </Layout>
            </Layout>

            <Divider/>

            <Layout style={styles.subContainer}>
                <Layout style={styles.line}>
                    <Text>HUMIDITE</Text>
                    <Text category={'h3'}>{current.main.humidity}%</Text>
                </Layout>

                <Layout style={styles.line}>
                    <Text>TAUX DE NUAGE</Text>
                    <Text category={'h3'}>{current.clouds.all}%</Text>
                </Layout>
            </Layout>

            <Divider/>

            <Layout style={styles.subContainer}>
                <Layout style={styles.line}>
                    <Text>MIN</Text>
                    <Text category={'h3'}>{current.main.temp_min}</Text>
                </Layout>

                <Layout style={styles.line}>
                    <Text>MAX</Text>
                    <Text category={'h3'}>{current.main.temp_max}</Text>
                </Layout>
            </Layout>

            <Divider/>

            <Layout style={styles.subContainer}>
                <Layout style={styles.line}>
                    <Text>TEMP RESSENTIE</Text>
                    <Text category={'h3'}>{current.main.feels_like}</Text>
                </Layout>

                <Layout style={styles.line}>
                    <Text>VITESSE DU VENT</Text>
                    <Text category={'h3'}>{current.wind.speed} m/s</Text>
                </Layout>
            </Layout>

            <Divider/>
        </Layout>
    );
}

export default DetailsCurrent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    line: {
        flex: 1,
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
});
