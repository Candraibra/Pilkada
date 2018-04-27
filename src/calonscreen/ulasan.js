import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, } from 'native-base'
import { Row, Grid, Col } from "react-native-easy-grid";


class Ulasan extends Component {

    static navigationOptions = {
        tabBarLabel: ({ tintColor }) => (<Text style={{ fontSize: 15, fontWeight: "bold", color: tintColor }}>Ulasan</Text>
        )
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#f6f7f9" }}>
                <Content>
                    <View style={{ margin: 10, borderRadius: 10, backgroundColor: "white" }}>
                        <Text style={{ padding: 15, fontSize: 15 }}>Jokowi menurut saya merupakan pemimpin yang ideal bagi indonesia dia berasal dari darkay kecil yang membuat dia dekat dengan rakya good job jokowi</Text>
                        <View style={{flexDirection:"row",paddingBottom:10}}>
                            <View style={{}}>
                                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>Joko Purnomo</Text>
                                <Text style={{ fontSize: 13, marginLeft: 15, marginBottom: 10 }}>Selasa,22 Juni 2018</Text>
                            </View>
                            <View style={{ flexDirection: "row", position: "absolute", right: 15, justifyContent: "center", marginTop: 10 ,alignContent:"space-between"}}>
                                <Icon name="ios-thumbs-up-outline" style={{color:"#61ca7d",padding:10}}/>
                                <Icon name="ios-thumbs-down-outline" style={{ color:"#ee5353",padding:10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 10, borderRadius: 10, backgroundColor: "white" }}>
                        <Text style={{ padding: 15, fontSize: 15 }}>Jokowi menurut saya merupakan pemimpin yang ideal bagi indonesia dia berasal dari darkay kecil yang membuat dia dekat dengan rakya good job jokowi</Text>
                        <View style={{flexDirection:"row",paddingBottom:10}}>
                            <View style={{}}>
                                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>Joko Purnomo</Text>
                                <Text style={{ fontSize: 13, marginLeft: 15, marginBottom: 10 }}>Selasa,22 Juni 2018</Text>
                            </View>
                            <View style={{ flexDirection: "row", position: "absolute", right: 15, justifyContent: "center", marginTop: 10 ,alignContent:"space-between"}}>
                                <Icon name="ios-thumbs-up-outline" style={{color:"#61ca7d",padding:10}}/>
                                <Icon name="ios-thumbs-down-outline" style={{ color:"#ee5353",padding:10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 10, borderRadius: 10, backgroundColor: "white" }}>
                        <Text style={{ padding: 15, fontSize: 15 }}>Jokowi menurut saya merupakan pemimpin yang ideal bagi indonesia dia berasal dari darkay kecil yang membuat dia dekat dengan rakya good job jokowi</Text>
                        <View style={{flexDirection:"row",paddingBottom:10}}>
                            <View style={{}}>
                                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>Joko Purnomo</Text>
                                <Text style={{ fontSize: 13, marginLeft: 15, marginBottom: 10 }}>Selasa,22 Juni 2018</Text>
                            </View>
                            <View style={{ flexDirection: "row", position: "absolute", right: 15, justifyContent: "center", marginTop: 10 ,alignContent:"space-between"}}>
                                <Icon name="ios-thumbs-up-outline" style={{color:"#61ca7d",padding:10}}/>
                                <Icon name="ios-thumbs-down-outline" style={{ color:"#ee5353",padding:10}}/>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default Ulasan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});