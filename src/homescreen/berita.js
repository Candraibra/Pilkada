
import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
    AppRegistry
} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid"
import Svg, { Line } from "react-native-svg"
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wordBerita: {
        alignItems: 'flex-start',
        margin: "2%",
    },
    wordDate: {
        fontFamily: 'Ubuntu_Light',
        fontSize: 10,
        color: "#363636",
    },
    wordTitle: {
        fontFamily: 'Ubuntu_Regular',
        fontSize: 14,
    },
    wordDesc: {
        marginTop: '2%',
        fontFamily: 'Ubuntu_Light',
        fontSize: 12,
    },
});

class BeritaScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20, backgroundColor: "#ffffff", borderRadius: 10, bottom: 0, minHeight: 300 }}>
            <Grid width={"100%"}>
                <Row style={{ flexDirection: "column", padding: 15 }}>
                <TouchableOpacity >
                    <Grid>
                        <Col style={{ width: "25%", marginRight: 20 }}>
                            <Image source={require("../img/drawable-xxhdpi/catur.png")} style={{ borderRadius: 10, maxHeight: "100%", maxWidth: "100%" }} />
                        </Col>
                        <Col>
                            <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>Jokowi bermain catur dengan ahok</Text>
                            <Text style={{ textAlign: "left", fontSize: 10, fontFamily: "OpenSans-SemiBold" }}>Selasa, 17 Februari 2018</Text>
                            <Text style={{ textAlign: "left", fontSize: 15, fontFamily: "OpenSans-SemiBold", }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply </Text>
                        </Col>
                    </Grid>
                    </TouchableOpacity>
                </Row>
                <Svg height="5" width="100%">
                    <Line x1="100%" y1="0" x2="0" y2="0" stroke="#ededed" strokeWidth="2" />
                </Svg>
                <Row style={{ flexDirection: "column", padding: 15 }}>
                <TouchableOpacity>
                    <Grid>
                        <Col style={{ width: "25%", marginRight: 20 }}>
                            <Image source={require("../img/drawable-xxhdpi/catur.png")} style={{ borderRadius: 10, maxHeight: "100%", maxWidth: "100%" }} />
                        </Col>
                        <Col>
                            <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>Jokowi bermain catur dengan ahok</Text>
                            <Text style={{ textAlign: "left", fontSize: 10, fontFamily: "OpenSans-SemiBold" }}>Selasa, 17 Februari 2018</Text>
                            <Text style={{ textAlign: "left", fontSize: 15, fontFamily: "OpenSans-SemiBold", }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply </Text>
                        </Col>
                    </Grid>
                    </TouchableOpacity>
                </Row>
                <Svg height="5" width="100%">
                    <Line x1="100%" y1="0" x2="0" y2="0" stroke="#ededed" strokeWidth="2" />
                </Svg>
                <Row style={{ flexDirection: "column", padding: 15 }}>
                <TouchableOpacity>
                    <Grid>
                        <Col style={{ width: "25%", marginRight: 20 }}>
                            <Image source={require("../img/drawable-xxhdpi/catur.png")} style={{ borderRadius: 10, maxHeight: "100%", maxWidth: "100%" }} />
                        </Col>
                        <Col>
                            <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>Jokowi bermain catur dengan ahok </Text>
                            <Text style={{ textAlign: "left", fontSize: 10, fontFamily: "OpenSans-SemiBold" }}>Selasa, 17 Februari 2018</Text>
                            <Text style={{ textAlign: "left", fontSize: 15, fontFamily: "OpenSans-SemiBold", }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply </Text>
                        </Col>
                    </Grid>
                    </TouchableOpacity>
                </Row>
            </Grid>
        </View>
        );
    }
}

export default BeritaScreen;
