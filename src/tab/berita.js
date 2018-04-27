import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import { SearchBar } from 'react-native-elements'
import { Icon, Container, Content } from 'native-base'
import Main from "../beritascreen/berita"
class Berita extends Component {

    static navigationOptions = {
        tabBarLabel: <Text>Berita</Text>,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-paper" style={{ color: tintColor, }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <SearchBar
                        showLoading
                        clearIcon={{ color: '#86939e', name: 'close', size: 15 }}
                        containerStyle={{ backgroundColor: "white", borderColor: "transperent", }}
                        inputStyle={{ backgroundColor: "#f6f7f9" }}
                        lightTheme
                        showLoadingIcon={true}
                        platform="android"
                        placeholder='Search' />

                </View>
                <Content>
                    <Main />
                </Content>
            </Container>
        );
    }
}
export default Berita;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});