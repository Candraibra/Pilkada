import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    ListView,
    TouchableOpacity
} from "react-native";

import { Container, Content, Icon } from 'native-base'
import Main from "../calonscreen/index"

class Calon extends Component {

    static navigationOptions = {
        tabBarLabel: <Text>Calon</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-people" style={{ color: tintColor, }} />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                <View style={{ backgroundColor: "white", height: 45, }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={"#f6f7f9"}
                        barStyle={'dark-content'}
                    />
                    <Text style={{ color: "#251e1e", fontSize: 18, fontFamily: "Avenir-Black", left: 15, fontWeight: "bold", marginTop: 12, justifyContent: "center", }}> Tentang Calon</Text>
                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 10 }}>
                        <Icon style={{ color: "#251e1e" }} name="ios-search" size={27} />
                    </View>
                </View>
                    <Main />
            </Container>
        );
    }
}
export default Calon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});