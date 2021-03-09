import React from 'react';
import {Text, Layout, TopNavigation, Divider, List, ListItem} from "@ui-kitten/components";
import {SafeAreaView} from "react-native";
import {connect} from 'react-redux'

const Saved = ({saved, navigation}) => {
    const goToDetails = (itemToDetail) => {
        navigation.navigate('Details', {item: itemToDetail})
    }
    /*<List
        data={saved}
        renderItem={({item, index}) =>(
            <ItemMeteo item={item} navigation={navigation} />
        )}
    />*/
    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title={'Saved'} alignment={'center'}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>nombre de favoris : {saved.length}</Text>

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
