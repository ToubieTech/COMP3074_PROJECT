import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Button from "../components/Button";
import InputAddon from "../components/InputAddon";
import NavButton from "../components/NavButton";

const data = [
    { id: '1', title: 'Moxies'},
    { id: '2', title: 'Amal Toronto' },
    { id: '3', title: 'Made\'s Kitchen' },
    { id: '4', title: 'La Dolce Vita' },
    { id: '5', title: 'Forna Cultura' },
];





export default ( {navigation} ) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id} onPress={navigateToRestaurantDetail}>
      <View style={styles.listItem}>
        <Text style={styles.listText}>
            {item.title}
          </Text>
          <MaterialIcons style={styles.listIcon} name='keyboard-arrow-right' size={23} color='#E6332C' />
      </View>
      </TouchableOpacity>
    );
  }

    const navigateToAddRestaurant = () => {
      navigation.navigate("AddRestaurant")
    }

    const navigateToRestaurantDetail = () => {
      navigation.navigate("RestaurantDetail")
    }

    const [inputValue, setInputValue] = useState('')
    return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.textPrimary}>VIEW MY RESTAURANTS</Text>
            <View style={styles.horizontalRule}></View>
            <View style={styles.buttonContainer}>
            <Button onPress={navigateToAddRestaurant} text="Add Restaurant" size="medium"></Button>
            </View>
            <View>
              <InputAddon iconName='search' iconColor="#E6332C" placeholder='Search by name or tag' onChangeText={setInputValue}
                    value={inputValue} />
            </View>

            <View>
              <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id}  />
            </View>
        </View>
        <NavButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#FFF'},
    innerContainer: {padding: 10, marginTop: 20},
    buttonContainer: {alignItems: "flex-end"},
    textPrimary: {
        fontSize: 22,
        textAlign: 'center',
        color: '#E6332C',
        fontWeight: 'bold'
      },
      horizontalRule: {
        width: '100%',
        height: 1,
        marginVertical: 10,
        backgroundColor: '#FEF2F2'
      },
      
      listItem: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#FEF2F2',
        padding: 18,
        marginTop: 15,
        borderRadius: 15
      },
      listIcon: {
        alignItems: 'right',
        fontSize: 30
      },
      listText: {fontSize: 17}
})