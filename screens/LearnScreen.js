import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Image , View } from 'react-native'
const LearnScreen = ({navigation}) => {
    
    return (
        <View>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20}}>
        <Image  onClick={()=>navigation.navigate('Alphabet')}
            source={require('../assets/image/alphabet.jpeg')}
            style={{height: 100, width:100}}  />   
           <Text>ALPHABET</Text>
           
        </TouchableOpacity>


        <TouchableOpacity style={{alignItems: 'center', marginBottom:20}}>
        <Image  onClick={()=>navigation.navigate('Number')}
            source={require('../assets/image/number.png')}
            style={{height: 100, width:100}}  />   
           <Text>NUMBERS</Text>
        </TouchableOpacity>

        
            <TouchableOpacity style={{alignItems: 'center' , marginBottom:20}}>
            <Image  onClick={()=>navigation.navigate('Animal')}
                source={require('../assets/image/animals.jpeg')}
                style={{height: 100, width:100}}  />   
               <Text>ANIMALS</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{alignItems: 'center' , marginBottom:20}}>
        <Image  onClick={()=>navigation.navigate('Fruit')}
            source={require('../assets/image/fruits.jpeg')}
            style={{height: 100, width:100}}  />   
           <Text>FRUITS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center' , marginBottom:20}}>
        <Image  onClick={()=>navigation.navigate('Vegetable')}
            source={require('../assets/image/vegetables.jpeg')}
            style={{height: 100, width:100}}  />   
           <Text>VEGETABLES</Text>
        </TouchableOpacity>
        </View>
    )
}

export default LearnScreen

const styles = StyleSheet.create({

    container: {

    }

})
