import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Button from '../components/Button';


export default ({Navigation, route}) => {
  const { restaurant } = route.params;
  const [address, setAddress] = useState(restaurant.address);
  const navigation = useNavigation();

  const [location, setLocation] = useState({
    longitude: -79.4096960,
    latitude: 43.6796272,
  });

  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const getLocationFromAddress = async () => {
    try {
      const geoLocation = await Location.geocodeAsync(address);
      if (geoLocation && geoLocation.length > 0) {
        setLocation(geoLocation[0]);
        setRouteCoordinates([
          { latitude: location.latitude, longitude: location.longitude },
          { latitude: geoLocation[0].latitude, longitude: geoLocation[0].longitude },
        ]);
      }
    } catch (error) {
      console.error('Error fetching location: ', error);
    }
  };

  useEffect(() => {
    getLocationFromAddress();
  }, [address]);

    const navigateToGetDirection = () => {
        Navigation.navigate('GetDirection')
    }
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.textPrimary}>{restaurant.name}</Text>
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

         {/* Marker for the restaurant */}
         <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />

{/* Polyline to show the route */}
<Polyline
  coordinates={routeCoordinates}
  strokeColor="#3498db"
  strokeWidth={10}
/>

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