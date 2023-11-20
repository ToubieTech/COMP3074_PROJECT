import React from 'react';
import { View , StyleSheet, TextInput, Text} from 'react-native'

import StarRating from './StarRating';

export default ({ inputPlaceholder, inputName, inputLabel, inputType, ...props }) => {

    const inputStyles = [styles.input]

    if (inputType === 'textarea') {
        inputStyles.push(styles.textArea);
    }

    if (inputType === 'rating') {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{inputLabel}</Text>
                <StarRating />
            </View>
        );
    } else {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{inputLabel}</Text>
                <TextInput 
                    style={inputStyles}
                    placeholder={inputPlaceholder}
                    value={inputName}
                    {...props}
                />
            </View>
        );
    }
    
       
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10
    },
  
    input: {
        height: 40,
        width: 360,
        borderRadius: 7,
        padding: 10,
        backgroundColor: '#ecf0f1',
        marginBottom: 10
    },
    inputLabel: {marginBottom: 5, fontSize: 14},
    textArea: {height: 100}
})