import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Home from './tab/home'
import Calon from "./tab/calon"
import Berita from './tab/berita'
import Lokasi from './tab/lokasi'
import Quick from './tab/quick'
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

    Home: {
        screen: Home
    },
    Calon: {
        screen: Calon
    },
    Lokasi: {
        screen: Lokasi
    }, 
    Berita: {
        screen: Berita
    },
    Quick: {
        screen: Quick
    },


}, {
        animationEnabled: true,
        swipeEnabled: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            labelStyle: {
                fontFamily:"Avenir-Medium",
                fontSize:12
              },
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white',
                        height:60
                    }
                })
            },
            activeTintColor: '#f25757',
            inactiveTintColor: '#bec2c9',
            indicatorStyle:{backgroundColor:"transperent"},
            showLabel: true,
            showIcon: true
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});