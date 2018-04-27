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

import { Container, Content, Icon, ListItem } from 'native-base'
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import Berita from "../homescreen/berita"
import Tps from "../homescreen/tps"
class Home extends Component {

    static navigationOptions = {
        tabBarLabel: <Text>Home</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor, }} />
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
                        <Image source={require('../img/drawable-xxxhdpi/icon.png')} style={{width:20,height:20,left: 10,marginTop: 14}}/>
                        <Text style={{ color: "#ee5353", fontSize: 18, fontWeight: "bold", fontFamily: "Avenir-Black", left: 15, marginTop: 12, justifyContent: "center", }}>Pilgub</Text>
                        <Text style={{ color: "#251e1e", fontSize: 18, fontWeight: "bold", fontFamily: "Avenir-Black", left: 18, marginTop: 12, justifyContent: "center", }}>Jateng</Text>
                    </View>
                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 10 }}>
                        <Icon style={{ color: "#251e1e" }} name="ios-search" size={27} />
                    </View>
                </View>
                <Content>
                    <View style={styles.korusel}>
                        <SwipeableParallaxCarousel
                            data={datacarousel}
                            align="center"
                            navigation={true}
                            navigationType={'dots'}
                            height={200}
                            navigationColor="#2ab74f"
                            titleColor="white"
                            parallax={true}
                        />
                    </View>
                    <View style={{ backgroundColor: "#f6f7f9", paddingTop: 12, paddingLeft: 20, justifyContent: "space-between", flexDirection: "row" }}>
                        <View>
                            <Text style={{ fontFamily: "Avenir-Black", color: "#8E8A8B", fontSize: 16 }}>BERITA TERKINI</Text>
                        </View>
                        <TouchableOpacity style={{ right: 15 }}>
                            <Text style={{ fontFamily: "Avenir-Black", color: "#ee5353", fontWeight: "bold", fontSize: 13 }}>See all ></Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Berita />
                    </View>
                    <View style={{ backgroundColor: "#f6f7f9", paddingTop: 12, paddingLeft: 20, justifyContent: "space-between", flexDirection: "row" }}>

                        <View>
                            <Text style={{ fontFamily: "Avenir-Black", color: "#8E8A8B", fontSize: 16 }}>TPS TERDEKAT</Text>
                        </View>
                        <TouchableOpacity style={{ right: 15 }}>
                            <Text style={{ fontFamily: "Avenir-Black", color: "#ee5353", fontWeight: "bold", fontSize: 13 }}>See all ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Tps />
                    </View>

                </Content>
            </Container >
        );
    }
}
export default Home;
const datacarousel = [
    {
        "id": 339964,
        "title": "ahok nyalon lagi",
        "subtitle": "More than just a trend",
        "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
    },
    {
        "id": 315635,
        "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
    },

    {
        "id": 339403,
        "title": "Baby Driver",
        "subtitle": "More than just a trend",
        "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
    },
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7f9'
    }
});