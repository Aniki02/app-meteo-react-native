import React from 'react';
import {Layout, TopNavigation, Divider, List, Card, Text} from "@ui-kitten/components";
import {SafeAreaView} from "react-native";
import {connect} from 'react-redux'
import CardCurrent from "../Card/CardCurrent";
import {Colors} from "../../definitions/Colors";

const Saved = ({saved, navigation}) => {

    const goToDetails = (item) => {
        navigation.navigate('Details', {item: item})
    };

    const renderItem = ({ item }) => (
        <Card onPress={() => goToDetails(item)}>
            <CardCurrent navigation={navigation} current={item.current}/>
        </Card>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation style={{backgroundColor: Colors.mainAppColor}}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <List
                    style={{width: '100%'}}
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
