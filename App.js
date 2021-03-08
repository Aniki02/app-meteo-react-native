import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import {AppNavigator} from "./src/navigation/AppNavigator";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {Provider} from 'react-redux'
import Store from './src/redux/store'

export default () => (
    <Provider store={Store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <AppNavigator/>
        </ApplicationProvider>
    </Provider>

);
