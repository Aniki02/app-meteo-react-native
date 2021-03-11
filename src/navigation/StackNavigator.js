import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../components/Screen/Home";
import Details from "../components/Screen/Details";
import Saved from '../components/Screen/Saved';

const { Navigator, Screen} = createStackNavigator();

export const StackNavigator = () => (
    <Navigator headerMode={'none'}>
        <Screen name={'Home'} component={Home}/>
        <Screen name={'Saved'} component={Saved} />
        <Screen name={'Details'} component={Details}/>
    </Navigator>
);

