import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ({onPress, type, text, size}) =>  {  

    const buttonStyle = [styles.button];
    const textStyle = [styles.text];

    if (type == "iconBtn") {
        buttonStyle.push(styles.buttonIcon)
        textStyle.push(styles.textPrimary)
    } else if (type == "roundBtn") {
        buttonStyle.push(styles.buttonRound)
    }
    else {
        buttonStyle.push(styles.button)
    }

    if (size === "medium") {
        buttonStyle.push(styles.buttonMd)
    } else if (size === "large") {
        buttonStyle.push(styles.buttonLg)
    }


    textStyle.push(styles.text);

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: '#E6332C',
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 5,
        marginTop: 15
    },


    buttonMd: {
        width: '60%'
    },

    buttonLg: {
        paddingHorizontal: 6,
        paddingVertical: 10,
    },
    buttonRound: {
        borderRadius: 30,
        paddingHorizontal: 70,
        paddingVertical: 10,
        marginTop: 15
    },

    buttonIcon: {
        backgroundColor: '#F1F2F3',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 10
    },

    text: {
        color: '#FFFFFF',
        textAlign: "center",
        fontSize: 18
    },
    textPrimary: {
        fontSize: 12,
    },
    textSecondary: {}
   
})