import React from "react";
import {TopNavigation, TopNavigationAction, Divider} from '@ui-kitten/components'
import {SafeAreaView} from "react-native";
import {BackIcon} from "../../../assets/Icons";
import Weather from "../Forecast/Weather";
import {Colors} from "../../definitions/Colors";

const Details = ({navigation, route}) => {

    const {item} = route.params;
    const {current, globalWeather} = item

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation style={{backgroundColor: Colors.mainAppColor}} accessoryLeft={BackAction}/>
            <Divider/>
            <Weather navigation={navigation} current={current} globalWeather={globalWeather}/>
        </SafeAreaView>
    );
}

export default Details;

