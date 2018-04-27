import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Calon from "./calon.js"
import Ulasan from './ulasan.js'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {
    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({
    Calon: {
        screen: Calon
    },
    
    Ulasan: {
        screen: Ulasan
    },

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition:"top",
        tabBarOptions: {
            labelStyle: {
                fontFamily:"Avenir-Medium",
              },
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white',
                        height:40
                    }
                })
            },
            activeTintColor: '#f25757',
            inactiveTintColor: '#bec2c9',
            indicatorStyle:{backgroundColor:"red",height:3},
            showLabel: true,
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});