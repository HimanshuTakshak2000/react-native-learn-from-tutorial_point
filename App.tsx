// ScrollView --> The ScrollView is a generic scrollable container, which scrolls multiple child components and views inside it. In the ScrollView, we can scroll the components in both direction vertically and horizontally. By default, the ScrollView container scrolls its components and views in vertical. To scroll its components in horizontal, it uses the props horizontal: true (default, horizontal: false).


// // Example - 1
// // Vertical Scroll View

// import React, { Component } from 'react';  
// import { ScrollView, Text, Button, Alert } from 'react-native';  
  
// export default class ScrolledViewExample extends Component {  
//     onPressButton() {  
//         Alert.alert('You clicked the button!')  
//     }  
  
//     render() {  
//         return (  
//             <ScrollView style={{padding:15}}>  
//                 <Text style={{fontSize:20}}>Scroll me plz</Text>  
//                 <Button title={'Button 1'} onPress={this.onPressButton} />  
//                 <Text style={{fontSize:20}}>React Native Example of ScrollView</Text>  
//                 <Button title={'Button 2'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>React Native ScrollView Example</Text>  
//                 <Button title={'Button 3'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>If you like</Text>  
//                 <Button title={'Button 4'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Scrolling down</Text>  
//                 <Button title={'Button 5'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Scrolling down</Text>  
//                 <Button title={'Button 6'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>What's the best</Text>  
//                 <Button title={'Button 7'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>What's the best</Text>  
//                 <Button title={'Button 8'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Framework around?</Text>  
//                 <Button title={'Button 9'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Framework around?</Text>  
//                 <Button title={'Button 10'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>React Native</Text>  
//                 <Button title={'Button 11'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Scroll me plz</Text>  
//                 <Button title={'Button 12'} onPress={this.onPressButton} />  
//                 <Text style={{fontSize:20}}>Scroll me plz</Text>  
//                 <Button title={'Button 13'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>If you like</Text>  
//                 <Button title={'Button 14'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>If you like</Text>  
//                 <Button title={'Button 15'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Scrolling down</Text>  
//                 <Button title={'Button 16'} onPress={this.onPressButton}/>  
//             </ScrollView>  
//         );  
//     }  
// }  


// ============================================================== //


// Example - 2
// Horizontal ScrollView - The horizontal ScrollView scrolls the components and views from left to right. It will be implemented by setting the props horizontal to true (horizontal={true}).

import React, { Component } from 'react';  
import { ScrollView, View, Text, Button, StyleSheet, Alert } from 'react-native';  
  
export default class ScrolledViewExample extends Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <ScrollView  horizontal={true} style={styles.container} contentContainerStyle={styles.scrollViewContainer}>  
                <Text style={{fontSize:22, padding: 10}}>Horizontal ScrollView</Text>  

                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Button 1"  
                        color="#FF3D00"  
                    />  
                </View>  

                <Text style={{fontSize:22, padding: 10}}>javatpoint</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Button 2"  
                        color="#3D00FF"  
                    />  
                </View>  
                
                <Text style={{fontSize:22, padding: 10}}>React Native ScrollView Example</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Button 3"  
                        color="#FFFF3D"  
                    />  
                </View>  

                <Text style={{fontSize:22, padding: 10}}>If you like</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Button 4"  
                        color="#FF3DFF"  
                    />  
                </View>  

                <Text style={{fontSize:22, padding: 10}}>Scrolling horizontal</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Button 5"  
                        color="#3DFF00"  
                    />  
                </View>  
            </ScrollView>  
        );  
    }  
}  

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
    }, 

    scrollViewContainer:{
        alignItems:'center'
    },

    buttonStyle:{ 
        height: 50, 
        width: 70, 
    }
})  

// Note - If we want to align item and justifyContent then we have to use contentContainerStyle prop to write these propperty inside this prop.

// ============================================================== //


// Example - 3



// ============================================================== //







