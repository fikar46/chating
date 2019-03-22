import React from 'react';
import { createBottomTabNavigator, createAppContainer ,TabNavigator } from 'react-navigation';
import Timeline from './Timeline'
import Profile from './Profile';
import Post from './Post';
import {Icon} from 'react-native-elements'
import Home from './Home'
import Chat from './Chat';

export default createBottomTabNavigator({
    Home: {
        screen:Home,
        navigationOptions:{
            tabBarLabel:"Home",
            tabBarIcon: ({tintColor}) => <Icon name='home' color={tintColor} size={35}/>,
        },
    },
    Chat: {
        screen:Chat,
          navigationOptions:{
              tabBarLabel:"Chat",
              tabBarIcon: ({tintColor}) => <Icon name='question-answer' color={tintColor} size={35}/>,
          },
      },
    Timeline: {
        screen:Timeline,
        navigationOptions:{
            tabBarLabel:"Timeline",
            tabBarIcon: ({tintColor}) => <Icon name='home' color={tintColor} size={35}/>,
        },
    },
    Profile: {
        screen:Profile,
          navigationOptions:{
              tabBarLabel:"Profile",
              tabBarIcon: ({tintColor}) => <Icon name='account-circle' color={tintColor} size={35}/>,
          },
      }
});

