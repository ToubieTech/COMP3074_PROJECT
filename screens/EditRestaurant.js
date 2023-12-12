import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";
import Button from "../components/Button";
import Input from "../components/Input";
import StarRating from "../components/StarRating";



export default function EditRestaurant({route}) {
  const navigation=useNavigation();
  const {restaurantData, restaurant, setRestaurantData}=route.params
  const [name, setName] = useState(restaurant.name || "");
  const [phone, setPhone] = useState(restaurant.phone || "");
  const [address, setAddress] = useState(restaurant.address || "");
  const [desc, setDesc] = useState(restaurant.description || "");
  const [tag, setTag] = useState(restaurant.tags || "");
  const [rating, setRating] = useState(restaurant.rating || 0);


  function updateItem(itemName, updatedData){
    const updatedList = restaurantData.map(item => {
      if (item.name === itemName) {
        return { ...item, ...updatedData };
      }
      return item;
    });

    setRestaurantData(updatedList);
  }


  const handleEditRestaurant = () => {
    console.log('Editting Post:', { name, address, desc, phone, tag, rating });
    try {
      updateItem(restaurant.id, {
        'name': name,
        'description': desc,
        'address': address,
        'phone': phone,
        'rating': rating,
        'tags':tag
      })
    }catch (e) {
      console.log(e)
    }
    navigation.navigate('Restaurants')
  };
    

    return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.textPrimary}>EDIT RESTAURANT</Text>
            <View style={styles.horizontalRule}></View>
            
            <View style={styles.formContainer}>
              <Input placeholder='Enter restaurant name' inputLabel='Enter restaurant name:' 
                inputName={name} onChangeText={(text) => setName(text)}/>

              <Input placeholder='Enter restaurant phone' inputLabel='Enter restaurant phone:' 
                inputName={phone} onChangeText={(text) => setPhone(text)} />

              <Input placeholder='Enter restaurant address' inputLabel='Enter restaurant address:' 
                inputName={address} onChangeText={(text) => setAddress(text)}/>

            <Input placeholder='Enter restaurant description' inputLabel='Enter restaurant description:' 
              inputName={desc} inputType='textarea' onChangeText={(text) => setDesc(text)} multiline={true} numberOfLines={4} 
              textAlignVertical="top" />

            <Input placeholder='Enter restaurant tag' inputLabel='Enter restaurant tag (can be separated by comma):' 
                inputName={tag} onChangeText={(text) => setTag(text)}/>

          <Text style={styles.inputLabel}>Rate restaurant:</Text>
          <StarRating type="unrated" rating={rating} onRatingPress={setRating} />
            
            <Button text='EDIT' size='large' onPress={handleEditRestaurant} />
            
            </View>
           
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#FFF'},
    innerContainer: {paddingLeft: 10, marginTop: 20},
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
      
      formContainer: {
        padding: 10
      },
      marginTop20: {marginTop: 20}
})