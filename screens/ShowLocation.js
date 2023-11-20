import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from '../components/Button';
import NavButton from '../components/NavButton';

export default ({Navigation}) => {
    const navigateToGetDirection = () => {
        Navigation.navigate('GetDirection')
    }
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.textPrimary}>MOXIES</Text>
                <Button text='Get Direction' onPress={navigateToGetDirection} />

            </View>
            <View style={styles.horizontalRule}></View>

            <MapView
            style={styles.map}
            //specify our coordinates.
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      />

        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Marker Title"
          description="Marker Description"
        />


        <NavButton />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#FFF', padding: 10},
    horizontalRule: {
        width: '100%',
        height: 1,
        marginVertical: 10,
        backgroundColor: '#FEF2F2'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      textPrimary: {
        fontSize: 22,
        color: '#E6332C',
        fontWeight: 'bold'
      },
      map: {
        flex: 1
      }
})