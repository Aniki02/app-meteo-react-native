import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import Saved from "../components/Screen/Saved";
import {StackNavigator} from "./StackNavigator";
import {SearchIcon, StarIcon} from "../../assets/Icons";

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={SearchIcon} title={'Search'}/>
        <BottomNavigationTab icon={StarIcon} title={'Saved'}/>
    </BottomNavigation>
);

export const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name={'Search'} component={StackNavigator}/>
        <Screen name={'Saved'} component={Saved}/>
    </Navigator>
);
