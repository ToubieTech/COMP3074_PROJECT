import React from 'react';
import { View , StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default ({iconName, iconColor, onPress, inputPlaceholder, inputName, ...props}) => {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={inputPlaceholder}
                name={inputName}
                {...props}
            />
            <TouchableOpacity onPress={onPress}>
                <MaterialIcons name={iconName} size={23} color={iconColor} />
            </TouchableOpacity>
        </View>
    );   
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', alignItems: 'center', 
        height: 40,
        width: 370,
        borderRadius: 7,
        padding: 10,
        backgroundColor: '#ecf0f1',
        marginBottom: 10,
        marginTop: 20
    },
    inputIcon: {
        size: 20,
        marginRight: 10
    },
    input: {
        flex: 1, height: 40
    }
})