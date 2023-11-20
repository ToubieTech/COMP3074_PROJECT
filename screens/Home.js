import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from '../components/Button';
import NavButton from "../components/NavButton";

const imageLogo = require('../images/logo.png');
const imageHome = require('../images/home.png');

export default ({ navigation }) =>  {
    const navigateToRestaurant = () => {
        navigation.navigate("Restaurants");
    };

    const navigateToAbout = () => {
        navigation.navigate("About");
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageLogo} style={[styles.image, styles.imagePrimary]} />
                <Text style={styles.textPrimary}>YOUR PERSONAL</Text>
                <Text style={styles.textSecondary}>RESTAURANT GUIDE</Text>
                <View style={styles.horizontalRule}></View>
                <Image source={imageHome} style={[styles.image, styles.imageSecondary]} />
                <Text style={[styles.text, styles.textCenter, styles.marginBottom35]}>For anyone who loves dining out and exploring new culinary experiences</Text>
                <Button onPress={navigateToRestaurant} text="GET STARTED" type="roundBtn" />
                <Button onPress={navigateToAbout} text="ABOUT US" type="roundBtn" style={{marginTop: 15}} />
                
            </View>
            <NavButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 10, backgroundColor: '#FFF'},
    imageContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    image: {
        marginBottom: 15
    },

    imagePrimary: {
        width: 100,
        height: 100
    },

    imageSecondary: {
        width: 175,
        height: 175
    },

    text: {
        fontSize: 17,
        marginBottom: 16
    },

    textCenter: {
        textAlign: 'center',
    },

    textPrimary: {
        fontSize: 18
      },
      textSecondary: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E6332C'
      },
      horizontalRule: {
        width: '100%',
        height: 1,
        marginVertical: 10,
        backgroundColor: '#FEF2F2'
      },
      marginBottom10: {marginBottom: 10},
      marginBottom25: {marginBottom: 25},
      marginBottom30: {marginBottom: 30},
      marginBottom35: {marginBottom: 35}
})