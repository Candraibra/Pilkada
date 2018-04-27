import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar
} from "react-native";
import { SearchBar } from 'react-native-elements'
import { Container, Content, Icon } from 'native-base'
import Maps from "../lokasiscreen/maps"
class Lokasi extends Component {
    static navigationOptions = {
        tabBarLabel: <Text>Lokasi</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-locate" style={{ color: tintColor, }} />
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
                    <Text style={{ color: "#251e1e", fontSize: 18, fontFamily: "Avenir-Black", left: 15, fontWeight: "bold", marginTop: 12, justifyContent: "center", }}>TPS</Text>
                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 10 }}>
                        <Icon style={{ color: "#251e1e" }} name="ios-search" size={27} />
                    </View>
                </View>
<Maps/>
            </Container>
        );
    }
}
export default Lokasi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});



