import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {TabNavigator} from "./BottomNavigator";

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
)
