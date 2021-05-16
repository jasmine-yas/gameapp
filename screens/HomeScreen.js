import React from 'react'
import { StyleSheet, View, BackHandler} from 'react-native'
import {Button} from '@material-ui/core';



const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Button onClick={()=>navigation.navigate('Learn')} >
                learn
            </Button>

            <Button onClick={()=>navigation.navigate('Play')} >
                Play
            </Button>
            
            <Button onPress= {() => BackHandler.exitApp()} >
                Exit
            </Button>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    

})
