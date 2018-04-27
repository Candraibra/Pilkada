import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";
import { SearchBar } from 'react-native-elements'
import { Container, Content, Icon } from 'native-base'
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

class Lokasi extends Component {
    constructor(props) {
        super(props);

        const markerInfo = [];
        for (let i = 1; i < NUM_MARKERS; i++) {
            markerInfo.push({
                latitude: (((Math.random() * 2) - 1) * MARKERS_LATITUDE_DELTA) + LATITUDE,
                longitude: (((Math.random() * 2) - 1) * MARKERS_LONGITUDE_DELTA) + LONGITUDE,
                isSpecial: Math.random() < PERCENT_SPECIAL_MARKERS,
                id: i,
            });
        }

        this.state = {
            markerInfo,
        };
    }

    static navigationOptions = {
        tabBarLabel: <Text>Lokasi</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-locate" style={{ color: tintColor, }} />
        )
    }

    render() {
        const markers = this.state.markerInfo.map((markerInfo) =>
        <Marker
            coordinate={markerInfo}
            key={markerInfo.id}
            pinColor={markerInfo.isSpecial ? '#c5a620' : null}
            style={markerInfo.isSpecial ? styles.specialMarker : null}
        />
    );

        return (
            <Container style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    ref={ref => { this.map = ref; }}
                    style={styles.map}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: MAP_LATITUDE_DELTA,
                        longitudeDelta: MAP_LONGITUDE_DELTA,
                    }}
                >
                    {markers}
                </MapView>
            </Container>
        );
    }
}
export default Lokasi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});



const ASPECT_RATIO = width / height;
const LATITUDE =-7.51417;
const LONGITUDE = 109.29417;
const MARKERS_LATITUDE_DELTA = 0.2;
const MARKERS_LONGITUDE_DELTA = MARKERS_LATITUDE_DELTA * ASPECT_RATIO;
const MAP_LATITUDE_DELTA = 1;
const MAP_LONGITUDE_DELTA = MAP_LATITUDE_DELTA * ASPECT_RATIO;
const NUM_MARKERS = 10;
const PERCENT_SPECIAL_MARKERS = 0.1;