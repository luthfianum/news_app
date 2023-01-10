import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen, DetailScreen from '../screens/index.js';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const stack = createNativeStackNavigator();

const Router = () => {
    return (
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Detail" component={DetailScreen} />
        </stack.Navigator>
    );
};

export default Router;
