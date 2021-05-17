import React from 'react'
import { StyleSheet, View, BackHandler,Button} from 'react-native'



const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Button onPress={()=>navigation.navigate('Learn')} title='learn'/>
            
        

            <Button onPress={()=>navigation.navigate('Play')} title='play' />
                
            
            <Button onPress= {() => BackHandler.exitApp()} title='exit'/>
       
            
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
