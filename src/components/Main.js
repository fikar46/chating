import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Authentication from './authentication'
import Screen from './Screen'
import Post from './Post';
import Curhat from './Curhat';
export default createStackNavigator(
    {
        Login: {
            screen: Authentication
        },
        MainMenu: {
            screen:  ({ navigation }) => <Screen screenProps={{ rootNavigation: navigation }} />
        },
        Curhat:{
            screen:Curhat
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);