import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Home from "./src/components/Home";



export default () => (
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <Home />
    </ApplicationProvider>
);
