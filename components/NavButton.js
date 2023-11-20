import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './Row';
import Button from './Button';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ Navigation }) => {
    const navigateToHome = () => {
        Navigation.navigate('GetDirection')
    }

    const navigateToAbout = () => {
        Navigation.navigate('About')
    }

    const navigateToRestaurants = () => {
        Navigation.navigate('Restaurants')
    }

    return (
        <View style={styles.navButtonContainer}>
            <Row>
                <Button type="iconBtn" text={<MaterialIcons name="home" style={styles.icon} />} onPress={navigateToHome} />
                <Button type="iconBtn" text={<MaterialIcons name="info" style={styles.icon} />} onPress={navigateToAbout} />
                <Button type="iconBtn" text={<MaterialCommunityIcons name="food" style={styles.icon} onPress={navigateToRestaurants} />} />
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    navButtonContainer: {
        flex: 1, 
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    icon: {
        fontSize: 16,
        color: '#000000',
    },
    activeIcon: {
        color: '#E6332C'
    }
})