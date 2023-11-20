import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ( {type} ) => {
    const [rating, setRating] = useState(0);

    const handleRating = (selectedRating) => {
        setRating(selectedRating);
    };

    if (type === 'rated') {
        return (
            <View style={styles.starContainer}>
                <TouchableOpacity style={styles.starContainer}>
                        <MaterialIcons name='star' size={20} color='#000' />
                        <MaterialIcons name='star' size={20} color='#000' />
                        <MaterialIcons name='star' size={20} color='#000' />
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.starContainer}>
                {[1,2,3,4,5].map((index) => (
                    <TouchableOpacity key={index} onPress={() => handleRating(index)}>
                        <MaterialIcons name={rating >= index ? 'star' : 'star-outline'} size={20} color='#000' />
                    </TouchableOpacity>
                ))}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
    }
})