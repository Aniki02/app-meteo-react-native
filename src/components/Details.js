import React from "react";
import {TopNavigation, TopNavigationAction, Icon, Divider, Layout, Text, Button} from '@ui-kitten/components'
import {SafeAreaView} from "react-native";
import {connect} from 'react-redux'
import {BackIcon, SaveIcon, SaveIconEmpty} from "../../assets/Icons";
import {HourlyForecast} from "./HourlyForecast";
import {DailyForecast} from "./DailyForecast";

const Details = ({navigation, route, saved, dispatch}) => {

    const {item} = route.params;

    const save = (itemToSave) => {
        const action = {type:'ADD', value: itemToSave}
        dispatch(action)
    }

    const unsave = (itemToUnsave) => {
        const action = {type:'DEL', value: itemToUnsave}
        dispatch(action)
    }

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    const SaveAction = () => {
        if (saved.findIndex(element => element.id === item.id) !== -1){
            return (
                <Button appearance={"ghost"} status={"primary"} accessoryLeft={SaveIcon} onPress={()=> unsave(item)}/>
            );
        } else {
            return (
                <Button appearance={"ghost"} status={"primary"} accessoryLeft={SaveIconEmpty} onPress={()=> save(item)}/>
            );
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title={'Details'} alignment={'center'} accessoryLeft={BackAction} accessoryRight={SaveAction}/>
            <Divider/>
            <Layout style={{ flex: 1}}>
                <HourlyForecast weather={item.hourly} />
                <DailyForecast weather={item.daily}/>
            </Layout>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) =>{
    return {
        saved: state.saved
    };
}

export default connect(mapStateToProps) (Details);

