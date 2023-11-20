import React from 'react';
import  { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import StarRating from '../components/StarRating';
import Row from '../components/Row';
import NavButton from '../components/NavButton';


export default ({ navigation }) => {
    const navigateToEditRestaurant = () => {
        navigation.navigate('EditRestaurant')
    }

    const navigateToShowLocation = () => {
        navigation.navigate('ShowLocation')
    }


   return (
    <View style={styles.container}>
        <View style={styles.rightEnd}>
            <TouchableOpacity>
                <MaterialIcons style={styles.containerIcon} name='edit' size={24} color='#E6332C' onPress={navigateToEditRestaurant} />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={styles.containerIcon} name='delete' size={24} color='#E6332C' />
            </TouchableOpacity>
        </View>

        <View style={styles.innerContainer}>
            <Text style={styles.textPrimary}>MOXIES</Text>
        </View>

        <View style={styles.horizontalRule}></View>
        <View style={styles.row}>
            <MaterialIcons name='place' size={24} color='#E6332C' />
            <Text style={styles.text22}>Address</Text>
        </View>
        <View style={styles.paddingLeft10}>
            <Text style={[styles.marginLeft10, styles.marginBottom10, styles.text15]}>146, Kendal Avenue, Toronto, Ontario, Canada</Text>
        </View>
        <View style={styles.marginLeft10}>
            <Button text='Show Location' size='medium' onPress={navigateToShowLocation} />
        </View>

        <View style={[styles.row, styles.marginTop10]}>
            <MaterialIcons name='phone' size={24} color='#E6332C' />
            <Text style={styles.text22}>Phone</Text>
        </View>
        <View style={styles.paddingLeft10}>
            <Text style={[styles.marginLeft10, styles.marginBottom10, styles.text15]}>(437)256-6713</Text>
        </View>
        

        <View style={[styles.row, styles.marginTop10]}>
            <MaterialIcons name='list' size={24} color='#E6332C' />
            <Text style={styles.text22}>Desciption</Text>
        </View>
        <View style={styles.paddingLeft10}>
            <Text style={[styles.marginLeft10, styles.marginBottom10, styles.text15, styles.textJustify]}>
            Etiam consectetur, justo a pulvinar volutpat, velit mauris dictum nisl, at condimentum risus velit sit amet dui. 
            Donec eget enim commodo, tincidunt mauris ut, consequat dolor. Duis quis accumsan nibh. Vestibulum at libero scelerisque, 
            egestas ipsum sit amet, vehicula dolor. Maecenas erat leo, bibendum in purus sed, facilisis hendrerit mauris. 
            Nulla ullamcorper, nunc at rutrum aliquam, lorem odio auctor quam, et finibus magna sapien
            </Text>
        </View>

        <View style={styles.row}>
            <View style={styles.tag}>
                <Text style={styles.tagText}>Vegan</Text>
            </View>
        </View>
        
        <View style={styles.center}><StarRating type='rated' /></View>
        <View style={[styles.center, styles.marginTop10]}>
            <Text>Share On:</Text>
            <Row>
                <MaterialIcons name='email' size={24} color='#E6332C' />
                <MaterialIcons name='facebook' size={24} color='#E6332C' />
                <MaterialIcons name='alternate-email' size={24} color='#E6332C' />
            </Row>
        </View>

        <NavButton />

    </View>
   ); 
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 10, backgroundColor: '#FFF'},
    innerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
    rightEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerIcon: {alignSelf: 'flex-end'},

    row: {flexDirection: 'row'},
    horizontalRule: {
        width: '100%',
        height: 1,
        marginVertical: 10,
        backgroundColor: '#FEF2F2'
      },

      textPrimary: {
        fontSize: 22,
        textAlign: 'center',
        color: '#E6332C',
        fontWeight: 'bold'
      },

      tagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      tag: {
        backgroundColor: '#FEF2F2',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 18,
        margin: 5,
      },
      
      

      text24: {fontSize: 24},
      text22: {fontSize: 22},
      text15: {fontSize: 15},
      textJustify: {textAlign: 'justify'},
      paddingLeft10: {paddingHorizontal: 10},
      marginLeft10: {marginLeft: 15},
      marginBottom10: {marginBottom: 15},
      marginTop10: {marginTop: 15},
      center: {
        justifyContent: 'center',
        alignItems: 'center',}
    
})

