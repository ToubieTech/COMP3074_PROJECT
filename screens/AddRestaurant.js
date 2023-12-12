import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Button from "../components/Button";
import Input from "../components/Input";
import StarRating from "../components/StarRating";



export default function AddRestaurant({ route }) {


  const navigation = useNavigation();
  const {restaurantData, setRestaurantData}=route.params

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [desc, setDesc] = useState('')
  const [tag, setTag] = useState('')

  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };


  
  const addItem = (newItemData) => {
    const updatedList = [...restaurantData, newItemData];
    setRestaurantData(updatedList);
  };

 

  const handleAddRestaurant = () => {
    console.log('Creating Post:', { name, phone, address, desc, tag, rating });
    const newId = restaurantData.length > 0 ? Math.max(...restaurantData.map(item => item.id)) + 1 : 1;
    const newRestaurant={
      'id': newId,
      'name':name,
      'phone':phone,
      'address':address,
      'description':desc,
      'tags':tag,
      'rating':rating
    }
    try{
      addItem(newRestaurant)

    }catch (e) {
      console.log(e)
    }

    // Clear form fields and rating after submission
    setName('');
    setPhone('');
    setAddress('');
    setDesc('');
    setTag('');
    setRating(0);
    navigation.navigate('Restaurants')
  };
   

    return (
        <ScrollView style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.textPrimary}>ADD RESTAURANT</Text>
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
          <StarRating type="unrated" rating={rating} onRatingPress={handleRating} />
            
            <Button text='ADD' size='large' onPress={handleAddRestaurant} />
            
            </View>
           
        </View>
        </ScrollView>
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