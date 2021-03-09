import React from 'react';
import {Layout, List, Text} from "@ui-kitten/components";
import {CardDaily} from "./CardDaily";

export const DailyForecast = ({weather, navigation}) => {

    const renderItem = ({ item, index }) => (
        <CardDaily weather={item} navigation={navigation}/>
    );

    return(
        <Layout>
            <Text category={'h2'}>Next Week</Text>
            <List
                data={weather}
                renderItem={ renderItem}
            />
        </Layout>

    );
}

