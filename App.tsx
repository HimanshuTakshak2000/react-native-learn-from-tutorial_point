// Touchables --> Touchable components provide the capability to capture the tapping functionality. The touchables component can be implemented as an alternative of basic button if they are not look right for your app. Using these components you build your own button. Tapping on these components you can display the feedback. The touchables components do not provide any default styling so you will need to do your style for presenting nicely in the app.

/*
    Types of Touchable Components -
    There are four touchable components provided by React Native. Selection of this component depends on the kind of feedback you want to provide:
    > TouchableHighlight : The TouchableHighlight can be used where you would use a button or link on the web. The background of this component becomes dark on pressing it.

    > TouchableNativeFeedback : The TouchableNativeFeedback makes a view to response properly on touch. This component works only for Android operating system. It uses native state drawable to display the touch feedback.

    > TouchableOpacity : The TouchableOpacity wrapper is used to reduce the opacity of button. It allows background to be seen while the user press down. The opacity of button will be controlled by wrapping the children in an Animation.

    > TouchableWithoutFeedback : The TouchableWithoutFeedback is used when the user wants to handle the tap functionality but doesn't want to display any feedback.

    Note : Some time user presses a view and holds it for the set of time. This long press is handled by the function using onLongPress props of any of the above "Touchable" components.

*/

// Example - 1
import React, { Component } from 'react';  
import { Alert,Platform,StyleSheet,Text,TouchableHighlight,TouchableOpacity,  
    TouchableNativeFeedback,TouchableWithoutFeedback, View } from 'react-native';  
  
export default class Touchables extends Component {  
    onPressButton() {  
        Alert.alert('You tapped the button!')  
    }  
  
    onLongPressButton() {  
        Alert.alert('You long-pressed the button!')  
    }  
  
  
    render() {  
        return (  
            <View style={styles.container}>  

                <TouchableHighlight onPress={this.onPressButton} underlayColor="pink">  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableHighlight</Text>  
                    </View>  
                </TouchableHighlight>  

                <TouchableOpacity onPress={this.onPressButton} activeOpacity={.2}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableOpacity</Text>  
                    </View>  
                </TouchableOpacity>  

                <TouchableNativeFeedback  
                    onPress={this.onPressButton} background={TouchableNativeFeedback.Ripple('rgba(255, 0, 0, 0.3)', true)} >  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>  
                    </View>  
                </TouchableNativeFeedback>  

                <TouchableWithoutFeedback  
                    onPress={this.onPressButton}  
                >  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>  
                    </View>  
                </TouchableWithoutFeedback> 

                <TouchableHighlight onPress={this.onPressButton} onLongPress={this.onLongPressButton} underlayColor="white">  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>  
                    </View>  
                </TouchableHighlight>  

            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        paddingTop: 60,  
        alignItems: 'center'  
    }, 

    button: {  
        marginBottom: 30,  
        width: 270,  
        alignItems: 'center',  
        backgroundColor: '#5ead97'  
    }, 

    buttonText: {  
        padding: 20,  
        color: 'white',  
        fontSize: 18  
    }  
});  








