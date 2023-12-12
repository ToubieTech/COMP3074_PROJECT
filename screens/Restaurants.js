import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Button from "../components/Button";
import InputAddon from "../components/InputAddon";

export default ({ navigation, route }) => {
  const [restaurantData, setRestaurantData] = useState([
   
  ]);


  const filteredRestaurants = restaurantData.filter((restaurant) => {
    const nameMatch = restaurant.name.toLowerCase();
    const tagsMatch = restaurant.tags.toLowerCase();
    return nameMatch || tagsMatch;
  });

  const renderItem = ({ item }) => {
    return (

    //   <>
    //   {filteredRestaurants.map((restaurant) => (
    //     <TouchableOpacity
    //       key={restaurant.name}
    //       onPress={() => navigation.navigate('Details', { restaurant, restaurantData, setRestaurantData })}
    //       style={styles.restaurantContainer}
    //     >
    //       <Text style={styles.mainText}>{restaurant.name}</Text>
    //       <Text style={styles.descriptionText}>{restaurant.description}</Text>
    //     </TouchableOpacity>
    //   ))}
    // </>

      <TouchableOpacity key={item.name} onPress={() => navigateToRestaurantDetail(item)}>
        <View style={styles.listItem}>
          <Text style={styles.listText}>
            {item.name}
          </Text>
          <MaterialIcons style={styles.listIcon} name='keyboard-arrow-right' size={23} color='#E6332C' />
        </View>
      </TouchableOpacity>
    );
  };

  const navigateToAddRestaurant = () => {
    navigation.navigate('AddRestaurant', {
      restaurantData,
      setRestaurantData
    });
  };

  const navigateToRestaurantDetail = (restaurant) => {
    navigation.navigate('RestaurantDetail', {
      restaurant,
      restaurantData, // Pass the data directly
    });
  };

  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textPrimary}>VIEW MY RESTAURANTS</Text>
        <View style={styles.horizontalRule}></View>
        <View style={styles.buttonContainer}>
          <Button onPress={navigateToAddRestaurant} text="Add Restaurant" size="medium"></Button>
        </View>
        <View>
          <InputAddon
            iconName='search'
            iconColor="#E6332C"
            placeholder='Search by name or tag'
            onChangeText={setInputValue}
            value={inputValue}
          />
        </View>

        <View>
          <FlatList data={filteredRestaurants} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  innerContainer: { padding: 10, marginTop: 20 },
  buttonContainer: { alignItems: 'flex-end' },
  textPrimary: {
    fontSize: 22,
    textAlign: 'center',
    color: '#E6332C',
    fontWeight: 'bold',
  },
  horizontalRule: {
    width: '100%',
    height: 1,
    marginVertical: 10,
    backgroundColor: '#FEF2F2',
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FEF2F2',
    padding: 18,
    marginTop: 15,
    borderRadius: 15,
  },
  listIcon: {
    alignItems: 'right',
    fontSize: 30,
  },
  listText: { fontSize: 17 },
});
