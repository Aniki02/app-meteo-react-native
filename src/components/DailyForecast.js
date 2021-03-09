import React, {useState} from 'react';
import {Layout, List, Text} from "@ui-kitten/components";
import {ShortMeteoDaily} from "./ShortMeteoDaily";

export const DailyForecast = ({weather, navigation}) => {

    const [data, setData] = useState([{title: '1'}, {title: '2'}, {title: '3'}, {title: '4'}, {title: '5'}]);

    const renderItem = ({ item, index }) => (
        <ShortMeteoDaily weather={item} navigation={navigation}/>
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

