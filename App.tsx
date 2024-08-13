// Text Input --> TextInput is the fundamental component to input text. It has several props which configure the different features such as onChangeText that takes a function and call it whenever the text changed. The onSubmitEditing prop takes a function which is called when the text submitted. There are several things which can be performed with text input such as validating the text inside while user types.

// // Example - 1
// import React, { Component } from 'react';
// import { Text, TextInput, View } from 'react-native';

// interface PizzaTranslatorState {
//     text: string;
// }

// export default class PizzaTranslator extends Component<{}, PizzaTranslatorState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             text: ''
//         };
//     }
    
//     // Note - If we want to define state in the constructor then we have to create an interface.
//     // state={
//     //     text:'',
//     // }

//     render() {
//         return (
//             <View style={{ padding: 10, margin:10 }}>
//                 <TextInput
//                     style={{ height: 40, backgroundColor: 'pink', fontSize: 20, color: 'black' }}
//                     placeholder="Type here to translate!"
//                     placeholderTextColor={'black'}
//                     onChangeText={(text) => this.setState({ text })}
//                 />

//                 <Text style={{ padding: 30, fontSize: 50, margin:10 }}>
//                     {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }

// ========================================================================== //

// Multiline TextInput --> The multiline props provide facility to input multiple lines of text. Some props of TextInput are only compatible with multiline. For example: multiline={true/false}. The property borderButtomColor will not work if multiline = false.

// Example - 2 
import React, { Component } from 'react';  
import { View, TextInput } from 'react-native';  

interface UselessTextInputMultilineSate {
    text:string;
}

interface UselessTextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    multiline : boolean ; 
    numberOfLines : number ; 
    style: object,

}

  
class UselessTextInput extends Component<UselessTextInputProps>  {  
    render() {  
        return (  
            <TextInput 
            {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable={true}
            // maxLength={40} // --> due to this we are able to add only 40 letter i.e length of array is 40
            value={this.props.value} // Use the passed value prop
            onChangeText={this.props.onChangeText} // Handle text change

            />  
        );  
    }  
}  

export default class UselessTextInputMultiline extends Component<{}, UselessTextInputMultilineSate> {  

    constructor(props: any) {  
        super(props);  
        this.state = {  
            text: 'Useless Multiline Placeholder',  
        };  
    }  

    // state = {
    //             text : 'Useless Multiline Placeholder',
    //         } 
  
      
    render() {  
        return (  
            <View style={{  
                backgroundColor: this.state.text,  
                borderBottomColor: 'white',  
                borderBottomWidth: 1,  
               }}  
            >  
                <UselessTextInput  
                multiline = {true}  
                numberOfLines = {10}  
                onChangeText={(text) => this.setState({text})}  
                value={this.state.text}  
                style={{fontSize: 20, backgroundColor:'gray'}}  
                />  

                <View style={{margin:20}}></View>

                <TextInput  
                    multiline = {true}  
                    numberOfLines = {10}  
                    onChangeText={(text) => this.setState({text})}  
                    value={this.state.text}  
                    style={{fontSize: 20, backgroundColor:'gray'}}  
                    editable={true}
                    maxLength={40} // --> due to this we are able to add only 40 letter i.e length of array is 40
                />  

            </View>  
        );  
    }  
}  








