

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
import { Icon } from "native-base"
import Svg, { Line } from "react-native-svg"
import { Button } from 'react-native-elements';
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

class ListViewDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20, backgroundColor: "#ffffff", borderRadius: 10, bottom: 0, minHeight: 300 }}>
                <Grid width={"100%"}>
                    <Row style={{ flexDirection: "column", padding: 15 }}>
                        <TouchableOpacity>
                            <Grid>
                                <Col style={{ width: "15%", marginRight: 20, height: 100 }}>
                                    <View style={{ backgroundColor: "#f6f7f9", borderRadius: 100, height: 50, width: 50, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                        <Icon name="ios-pin" style={{ color: "#4b7eff" }} />
                                    </View>
                                </Col>
                                <Col style={{ width: "85%" }}>
                                    <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>TPS Desa Pabuaran 1</Text>
                                    <Text style={{ textAlign: "left", fontSize: 13, fontFamily: "OpenSans-SemiBold" }}>Jl. Sunan Ampel 341 Pabuaran, Purwokerto utara, Jawa Tengah, Indonesia</Text>
                                    <TouchableOpacity style={{ backgroundColor: "#61ca7d", justifyContent: "center", alignContent: "center", alignItems: "center", width: 100, height: 40, marginTop: 10 }}>
                                        <Text style={{ color: "#ffffff" }}>
                                            Lihat Peta
                                            </Text>
                                    </TouchableOpacity>
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
                                <Col style={{ width: "15%", marginRight: 20, height: 100 }}>
                                    <View style={{ backgroundColor: "#f6f7f9", borderRadius: 100, height: 50, width: 50, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                        <Icon name="ios-pin" style={{ color: "#4b7eff" }} />
                                    </View>
                                </Col>
                                <Col style={{ width: "85%" }}>
                                    <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>TPS Desa Pabuaran 1</Text>
                                    <Text style={{ textAlign: "left", fontSize: 13, fontFamily: "OpenSans-SemiBold" }}>Jl. Sunan Ampel 341 Pabuaran, Purwokerto utara, Jawa Tengah, Indonesia</Text>
                                    <TouchableOpacity style={{ backgroundColor: "#61ca7d", justifyContent: "center", alignContent: "center", alignItems: "center", width: 100, height: 40, marginTop: 10 }}>
                                        <Text style={{ color: "#ffffff" }}>
                                            Lihat Peta
                                            </Text>
                                    </TouchableOpacity>
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
                                <Col style={{ width: "15%", marginRight: 20, height: 100 }}>
                                    <View style={{ backgroundColor: "#f6f7f9", borderRadius: 100, height: 50, width: 50, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                        <Icon name="ios-pin" style={{ color: "#4b7eff" }} />
                                    </View>
                                </Col>
                                <Col style={{ width: "85%" }}>
                                    <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "bold", fontFamily: "OpenSans-SemiBold" }}>TPS Desa Pabuaran 1</Text>
                                    <Text style={{ textAlign: "left", fontSize: 13, fontFamily: "OpenSans-SemiBold" }}>Jl. Sunan Ampel 341 Pabuaran, Purwokerto utara, Jawa Tengah, Indonesia</Text>
                                    <TouchableOpacity style={{ backgroundColor: "#61ca7d", justifyContent: "center", alignContent: "center", alignItems: "center", width: 100, height: 40, marginTop: 10 }}>
                                        <Text style={{ color: "#ffffff" }}>
                                            Lihat Peta
                                            </Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                    </Row>
                </Grid>
            </View>
        );
    }
}

export default ListViewDemo;
