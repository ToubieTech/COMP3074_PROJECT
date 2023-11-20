import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const splashImage = require('../images/splash.jpg');
const logoImage = require('../images/logo-transparent.png');

export default ({ navigation }) =>  {

  useEffect(()=> {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);

    return () => {clearTimeout(timer)}
  }, [navigation])

  return (
    <View style={styles.container}>
      <ImageBackground source={splashImage} resizeMode="cover" style={styles.image}>
      <View style={styles.innerContainer}>
      <Image source={logoImage} resizeMode='contain' style={styles.logoImage}></Image>
      {/* <Text style={[styles.text, styles.textPrimary]}>YOUR PERSONAL</Text>
      <Text style={[styles.text, styles.textSecondary]}>RESTAURANT GUIDE</Text> */}
      </View>
       
      </ImageBackground>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  logoImage: {
   width: '75%'
  },
  text: {
    color: '#FFFFFF'
  },
  textPrimary: {
    fontSize: 18
  },
  textSecondary: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});