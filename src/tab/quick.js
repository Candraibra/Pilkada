import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar
} from "react-native";

import { Container, Content, Icon } from 'native-base'
import Chart from "../quickscreen/chart"

class Quick extends Component {

    static navigationOptions = {
        tabBarLabel: <Text style={{ fontSize: 12 }}>Quick Count</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-pie-outline" style={{ color: tintColor, }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={{ backgroundColor: "white", height: 56, }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={"#f6f7f9"}
                        barStyle={'dark-content'}
                    />
                    <View style={{ flexDirection: "row", flex: 1, alignContent: "space-around", marginTop: 2 }}>
                        <Image source={require('../img/drawable-xxxhdpi/icon.png')} style={{ width: 20, height: 20, left: 10, marginTop: 14 }} />
                        <Text style={{ color: "#ee5353", fontSize: 18, fontWeight: "bold", fontFamily: "Avenir-Black", left: 15, marginTop: 12, justifyContent: "center", }}>Quick</Text>
                        <Text style={{ color: "#251e1e", fontSize: 18, fontWeight: "bold", fontFamily: "Avenir-Black", left: 18, marginTop: 12, justifyContent: "center", }}>Count</Text>
                    </View>
                </View>
                <Chart />
            </Container>
        );
    }
}
export default Quick;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});