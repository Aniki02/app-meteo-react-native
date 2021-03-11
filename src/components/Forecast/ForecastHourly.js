import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, FlatList} from "react-native";
import {CardHourly} from "../Card/CardHourly";
import {Colors} from "../../definitions/Colors";

export const ForecastHourly = ({weather}) => {

    const renderItem = ({ item }) => (
        <CardHourly data={item}/>
    )

    return (
        <Layout>
            <Text style={styles.title} category={'h2'}>Hourly Forecast</Text>
            <FlatList
                horizontal
                data={weather}
                renderItem={ (item) => renderItem(item)}
                keyExtractor={(item) => item.dt}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.mainAppColor
    },
});
