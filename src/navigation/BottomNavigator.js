import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import Saved from "../components/Saved";
import {StackNavigator} from "./StackNavigator";

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={'Search'}/>
        <BottomNavigationTab title={'Saved'}/>
    </BottomNavigation>
);

export const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name={'Search'} component={StackNavigator}/>
        <Screen name={'Saved'} component={Saved}/>
    </Navigator>
);
