import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../components/Home";
import Details from "../components/Details";

const { Navigator, Screen} = createStackNavigator();

export const StackNavigator = () => (
    <Navigator headerMode={'none'}>
        <Screen name={'Home'} component={Home}/>
        <Screen name={'Details'} component={Details}/>
    </Navigator>
);

