
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
import { Content, Container, Icon } from 'native-base';
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

class Calon extends React.Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20, backgroundColor: "#ffffff", borderRadius: 10, bottom: 0, minHeight: 300 }}>
                    <Content>
                        <Grid>
                            <Row style={{ flexDirection: "column" }}>
                                <Row>
                                    <Image
                                        style={{ width: 40, height: 40, margin: 10, borderRadius: 15, marginHorizontal: 7 }}
                                        source={{ uri: 'https://static.simomot.com/wp-content/uploads/2014/03/1-lambang-partai-nasdem.jpg' }}
                                    />
                                </Row>
                                <Svg height="5" width="100%">
                                    <Line x1="100%" y1="0" x2="0" y2="0" stroke="#ededed" strokeWidth="2" />
                                </Svg>
                               
                                <Row style={{ flexDirection: "row",borderRadius:10 }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#61ca7d", }}>Ketua</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                                <Row style={{ flexDirection: "row" }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#ff9b48", }}>Wakil</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                            </Row>
                            <View style={{height:20,backgroundColor:'#f6f7f9'}}>
                                </View>
                             <Row style={{ flexDirection: "column",borderRadius:10 }}>
                                <Row>
                                    <Image
                                        style={{ width: 40, height: 40, margin: 10, borderRadius: 15, marginHorizontal: 7 }}
                                        source={{ uri: 'https://static.simomot.com/wp-content/uploads/2014/03/1-lambang-partai-nasdem.jpg' }}
                                    />
                                </Row>
                                <Svg height="5" width="100%">
                                    <Line x1="100%" y1="0" x2="0" y2="0" stroke="#ededed" strokeWidth="2" />
                                </Svg>
                                <Row style={{ flexDirection: "row" }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#61ca7d", }}>Ketua</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                                <Row style={{ flexDirection: "row" }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#ff9b48", }}>Wakil</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                            </Row>
                            <View style={{height:20,backgroundColor:'#f6f7f9'}}>
                                </View>

                             <Row style={{ flexDirection: "column" }}>
                                <Row>
                                    <Image
                                        style={{ width: 40, height: 40, margin: 10, borderRadius: 15, marginHorizontal: 7 }}
                                        source={{ uri: 'https://static.simomot.com/wp-content/uploads/2014/03/1-lambang-partai-nasdem.jpg' }}
                                    />
                                </Row>
                                <Svg height="5" width="100%">
                                    <Line x1="100%" y1="0" x2="0" y2="0" stroke="#ededed" strokeWidth="2" />
                                </Svg>
                                <Row style={{ flexDirection: "row" }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#61ca7d", }}>Ketua</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                                <Row style={{ flexDirection: "row" }}>
                                    <Image
                                        style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
                                        source={{ uri: 'https://awsimages.detik.net.id//community/media/visual/2017/10/12/d21d6960-d12c-4a1f-81f3-b6d10c76418b_43.jpg?w=780&q=90' }}
                                    />
                                    <Text style={{ fontFamily: "roboto", fontSize: 16, alignSelf: "center", padding: 20 }}>Ahmad Subarjo</Text>

                                    <TouchableOpacity style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#f6f7f9", alignSelf: "center", justifyContent: "center", }}>
                                        <Text style={{ alignSelf: "center", color: "#ff9b48", }}>Wakil</Text>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", right: 15, justifyContent: "center", marginTop: 15 }}>
                                        <TouchableOpacity style={{ right: 10 }}>
                                            <Icon name="ios-arrow-forward" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                </Row>
                            </Row>
                        </Grid>
                    </Content>
                </View>
            </Container>
        );
    }
}

export default Calon;
