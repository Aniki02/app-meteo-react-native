import React from 'react'
import {ListItem, Text} from "@ui-kitten/components";

const ItemMeteo = ({item, navigation}) => {

    const goToDetails= (itemToDetail) => {
        navigation.navigate('Details', {item: itemToDetail})
    };

    console.log(item);
    return (
        <ListItem
            title={item.name}
            description={'une description'}
            accessoryLeft={() => (<Text category={'h2'}>{item.name}</Text>)}
            accessoryRight={() => (<Text category={'h4'}>une description</Text>) }
            onPress={() => goToDetails(item)}
        />
    );
}

export default ItemMeteo;
