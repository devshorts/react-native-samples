import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from "./screens/Home";
import ProfileScreen from "./screens/Profile";

export const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Profile: {screen: ProfileScreen},
});


export default createAppContainer(MainNavigator);
