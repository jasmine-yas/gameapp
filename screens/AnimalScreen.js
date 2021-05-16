import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AnimalScreen = ({navigation}) => {
    return (
        <View>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20}}>
        <Image  onClick={()=>navigation.navigate('Alphabet')}
            source={require('../assets/image/alphabet.jpeg')}
            style={{height: 100, width:100}}  />   
           <Text>ALPHABET</Text>
           
        </TouchableOpacity>

        </View>
    )
}

export default AnimalScreen

const styles = StyleSheet.create({})
