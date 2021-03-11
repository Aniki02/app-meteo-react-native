import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";
import {Colors} from "../../definitions/Colors";

const CardCurrent = ({current}) => {

    return (
            <Layout style={styles.container}>
                <Layout style={{flex: 1}}>
                    <Text category={'h1'}>{current.name}</Text>
                </Layout>

                <Layout style={styles.subContainer}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'http://openweathermap.org/img/wn/'+current.weather[0].icon+'@4x.png',
                        }}
                    />
                    <Text category={'h1'}>{current.main.temp}°C</Text>
                </Layout>

                <Layout style={{flex: 1}}>
                    <Text category={'h4'}>{current.weather[0].description}</Text>
                </Layout>
            </Layout>
    );
};

export default CardCurrent;


const styles = StyleSheet.create({
    title: {
        color: Colors.mainAppColor
    },
    container:{
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    subContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
});

