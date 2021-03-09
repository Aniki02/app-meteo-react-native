import React from 'react';
import {Layout, TopNavigation, Divider, List} from "@ui-kitten/components";
import {SafeAreaView} from "react-native";
import {connect} from 'react-redux'
import {CurrentWeather} from "./CurrentWeather";

const Saved = ({saved, navigation}) => {

    const renderItem = ({ item }) => (
        <CurrentWeather navigation={navigation} current={item}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title={'Saved'} alignment={'center'}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <List
                    data={saved}
                    renderItem={renderItem}
                />

            </Layout>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        saved: state.saved
    };
}

export default connect(mapStateToProps) (Saved);
