import React from "react";
import {TopNavigation, TopNavigationAction, Divider, Layout, Text} from '@ui-kitten/components'
import {SafeAreaView} from "react-native";
import {BackIcon} from "../../assets/Icons";

const DetailsDaily = ({navigation, route}) => {

    const {item} = route.params;

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title={'Hourly details'} alignment={'center'} accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={{ flex: 1}}>
                <Text category={'h1'}>Daily details </Text>
            </Layout>
        </SafeAreaView>
    );
}

export default DetailsDaily;

