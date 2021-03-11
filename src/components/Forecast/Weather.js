import React from 'react'
import {Button, Divider, Layout, Text} from "@ui-kitten/components";
import CardCurrent from "../Card/CardCurrent";
import {ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import DetailsCurrent from "./DetailsCurrent";
import {ForecastHourly} from "./ForecastHourly";
import {ForecastDaily} from "./ForecastDaily";
import {StarIcon, StarIconEmpty} from "../../../assets/Icons";
import {connect} from "react-redux";

const Weather = ({navigation, saved, dispatch, current, globalWeather}) => {


    const item = {
        current: current,
        globalWeather: globalWeather
    }

    const save = (itemToSave) => {
        const action = {type:'ADD', value: itemToSave}
        dispatch(action)
    };

    const unsave = (itemToUnsave) => {
        const action = {type:'DEL', value: itemToUnsave}
        dispatch(action)
    };

    const SaveAction = () => {
        if (saved.findIndex(element => element.current.id === current.id) !== -1){
            return (
                <Button appearance={"ghost"} status={"primary"} accessoryLeft={StarIcon} onPress={()=> unsave(item)}/>
            );
        } else {
            return (
                <Button appearance={"ghost"} status={"primary"} accessoryLeft={StarIconEmpty} onPress={()=> save(item)}/>
            );
        }
    };

    return (
        <Layout style={styles.container}>
            <Layout style={styles.titleContainer}>
                <Text category={'h1'} appearance={'hint'} style={styles.title}>Current Weather</Text>
                <SaveAction/>
            </Layout>
            {
                current ?
                    <CardCurrent style={styles.container} navigation={navigation} current={current}/>
                    :
                    <ActivityIndicator />
            }
            <Divider/>

            <ScrollView style={styles.container}>
                {
                    current ?
                        <DetailsCurrent style={{flex: 2}} navigation={navigation} current={current}/>
                        :
                        <ActivityIndicator />
                }
                {
                    globalWeather ?
                        <Layout style={styles.container}>
                            <ForecastHourly weather={globalWeather.hourly} navigation={navigation}/>
                            <ForecastDaily weather={globalWeather.daily} navigation={navigation}/>
                        </Layout>
                        :
                        <ActivityIndicator/>
                }
            </ScrollView>
        </Layout>
    );
};

const mapStateToProps = (state) =>{
    return {
        saved: state.saved
    };
};

export default connect(mapStateToProps) (Weather);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#e75c55'
    },
    titleContainer: {
        flexDirection: "row",
        width: '100%'
    }
});
