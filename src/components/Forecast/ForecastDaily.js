import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {CardDaily} from "../Card/CardDaily";
import {StyleSheet, FlatList} from "react-native";
import {Colors} from '../../definitions/Colors'

export const ForecastDaily = ({weather, navigation}) => {

    const renderItem = ({ item}) => (
        <CardDaily weather={item} navigation={navigation}/>
    );

    return(
        <Layout>
            <Text style={styles.title} category={'h2'}>Next Week</Text>
            <FlatList
                data={weather}
                renderItem={ (item) => renderItem(item)}
                keyExtractor={(item) => item.dt}
            />
        </Layout>

    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.mainAppColor
    },
});

