// Example - 1
// import React, {Component} from 'react';  
// import { Text, View } from 'react-native';  
  
// export default class App extends Component {  
//     state = {  // state --> must be written like this only;
//         myState: 'This is a text component, created using state data. It will change or updated on clicking it.'  , // this is how we intially define state in class component 
//         secondState:" This is how we define state in class component",
//     }  

//     updateState = () => { // this is how we will create a function class component

//       if(this.state.myState === 'This is a text component, created using state data. It will change or updated on clicking it.'){
//         this.setState({myState: 'The state is updated'});
//       }
//       else{
//         this.setState({myState:'This is a text component, created using state data. It will change or updated on clicking it.'});
//       }
//     }

//     render() {  
//         return (  
//             <View>  
//                 <Text onPress={this.updateState} style={{fontSize:20, textAlign:'center', padding:10, borderColor:'pink', borderWidth:4, margin:15, height:200, verticalAlign:'middle'}}> {this.state.myState} </Text>  
//             </View>  
//         );  
//     }  
// }  


// Example - 2 --> interchange the Text value "Show" and "Hide" to show and hide the input password

import React, { Component } from 'react';  
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';  
  
export default class App extends Component {  
    state = {  
        password: '',  
        isPasswordVisible: true,  
        toggleText: 'Show',  
    }  

    // constructor(props: Props) {  
    //     super(props);  
    //     this.state = {  
    //         password: '',  
    //         isPasswordVisible: true,  
    //         toggleText: 'Show',  
    //     };  
    // }  

    handleToggle = () => {  
        const { isPasswordVisible } = this.state;  
        if (isPasswordVisible) {  
            this.setState({ isPasswordVisible: false });  
            this.setState({ toggleText: 'Hide' });  
        } else {  
            this.setState({ isPasswordVisible: true });  
            this.setState({ toggleText: 'Show' });  
        }  
    };  
    render() {  
        return (  
            <View style={styles.container}>  
                <TextInput  
                    secureTextEntry={this.state.isPasswordVisible}  
                    style={{width:'100%', height: 50, backgroundColor: '#a7a6a9', color: 'white', fontSize: 20, marginBottom:10 }}  
                />  
                <TouchableOpacity onPress={this.handleToggle}>  
                    <Text  style={{fontSize: 20}}>{this.state.toggleText}</Text>  
                </TouchableOpacity>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        padding:15,
    }  
});  
