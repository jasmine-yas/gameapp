import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SoundPlayer from 'react-native-sound-player'



const NumberScreen = ({navigation}) => {
    return (
        <view>
            <TouchableOpacity>
            new Player('filename.mp4').play();
            </TouchableOpacity>
        </view>
       
    )
}

export default NumberScreen

const styles = StyleSheet.create({})
