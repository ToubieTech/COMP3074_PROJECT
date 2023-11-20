import React from "react";
import { StyleSheet, View, Text} from "react-native";
import NavButton from "../components/NavButton";

export default () => {
    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.textPrimary}>ABOUT US</Text>
            <View style={styles.horizontalRule}></View>
            <Text>Oluwatobi Hajarat Giwa - 101331074</Text>
            <Text>Mustafizur Rahman - 101383735</Text>
            <Text>Idris Oyelaja - 101303746</Text>
            <Text>Adedolapo Balogun - 101377774</Text>
        </View>
        <NavButton />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#FFF'},
    innerContainer: {padding: 10, marginTop: 20},
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
      }
 })