import React, { Component } from 'react'  
import {StyleSheet,View, Text} from 'react-native'  
  
export default class SwitchExample extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={{backgroundColor: 'blue',flex:0.2, width:'50%'}} />  
                <View style={{backgroundColor: 'red', flex:0.5}} />  
                <Text style={{fontSize: 18, backgroundColor:"purple", height:100,}}>View Example</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
        //  flexDirection: 'column',  // no need to add column as it is by-default flex direction
        // height : 200, // no need to add height if we have provided flex property to the component 
         width: "80%",  
         backgroundColor:"green" // #5ead97  
     }  
})  
