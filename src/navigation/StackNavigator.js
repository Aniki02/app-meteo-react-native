import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../components/Home";
import Details from "../components/Details";
import DetailsHourly from "../components/DetailsHourly";
import DetailsDaily from "../components/DetailsDaily";

const { Navigator, Screen} = createStackNavigator();

export const StackNavigator = () => (
    <Navigator headerMode={'none'}>
        <Screen name={'Home'} component={Home}/>
        <Screen name={'Details'} component={Details}/>
        <Screen name={'DetailsHourly'} component={DetailsHourly}/>
        <Screen name={'DetailsDaily'} component={DetailsDaily}/>
    </Navigator>
);

