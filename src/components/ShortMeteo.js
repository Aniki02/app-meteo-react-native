import React from 'react'
import {Text, Layout, Card} from "@ui-kitten/components";
import {StyleSheet} from "react-native";

export const ShortMeteo = ({data, navigation}) => {
    console.log('ShortMeteo : ' + Object.keys(data));

    const navigateDetails = () => {
        navigation.navigate('Details', {item: data})
    };

    return(
        <Layout style={styles.container}>
            <Card style={styles.layout} onPress={navigateDetails}>
                <Text>{data.name}</Text>
            </Card>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
