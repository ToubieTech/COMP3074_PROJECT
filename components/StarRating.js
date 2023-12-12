import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default ({ type, rating, onRatingPress }) => {
  const handleRating = (selectedRating) => {
    onRatingPress(selectedRating);
  };

  if (type === 'rated') {
    return (
      <View style={styles.starContainer}>
        <TouchableOpacity style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <MaterialIcons
              key={index}
              name={rating >= index ? 'star' : 'star-outline'}
              size={20}
              color="#000"
            />
          ))}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => handleRating(index)}>
            <MaterialIcons
              name={rating >= index ? 'star' : 'star-outline'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
});
