import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import NavButton from "../components/NavButton";

export default function AddRestaurant() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [desc, setDesc] = useState('')
    const [tag, setTag] = useState('')

    return (
        <View style={styles.container}>
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

            <Input inputLabel='Rate restaurant:' 
                inputName={tag} inputType='rating' onChangeText={(text) => setTag(text)}/>
            
            <Button text='ADD' size='large' />
            
            </View>
           
        </View>
        <NavButton />
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