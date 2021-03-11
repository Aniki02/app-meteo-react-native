import React from 'react'
import {Icon} from '@ui-kitten/components'

export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const SaveIcon = (props) => (
    <Icon {...props} name={'save'}/>
);

export const SaveIconEmpty = (props) => (
    <Icon {...props} name={'save-outline'}/>
);

export const StarIcon = (props) => (
    <Icon {...props} name={'star'}/>
);

export const StarIconEmpty = (props) => (
    <Icon {...props} name={'star-outline'}/>
);

export const ViewedIcon = (props) => (
    <Icon {...props} name='eye' />
);

export const ViewedIconEmpty = (props) => (
    <Icon {...props} name='eye-outline' />
);

export const HomeIcon = (props) => (
    <Icon {...props} name='home' />
);

export const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
);

export const SearchIcon = (props) => (
    <Icon {...props} name='search'/>
);

export const SunIcon = (props) => (
    <Icon style={{backgroundColor: 'orange'}} {...props} name='sun'/>
);


