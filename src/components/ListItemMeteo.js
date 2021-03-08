import React from 'react'
import ItemMeteo from "./ItemMeteo";
import {List} from "@ui-kitten/components";

export const ListItemMeteo = ({data, navigation}) => {
    return (
        <List
            data={data}
            renderItem={({item, index}) =>(
                <ItemMeteo item={item} navigation={navigation} />
            )}
        />
    );
}

