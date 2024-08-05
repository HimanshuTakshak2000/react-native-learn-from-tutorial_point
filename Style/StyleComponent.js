import React, { Component } from 'react'  
import { Text, View, StyleSheet } from 'react-native'  
  
// This is how we declare function component in react-native :- 
// export default StyleComponent  = (props) => {  
//     return (  
//         <View>  
//             <Text style = {styles.myStyle}>  
//                 {props.myTextProp}  
//             </Text>  
//         </View>  
//     )  
// }  


// This is how we declare class component in react-native :- 

// This type of declaration is done only in typeScript file. 
// export default class StyleComponent extends Component<{myTextProp: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined}>{ 

// This type of declaration is done only in js file.
export default class StyleComponent extends Component{

    render(){
        return (
            <View>  
                <Text style = {styles.myStyle}>  
                    {this.props.myTextProp}  
                </Text>  
            </View>  
        );
    }
}

const styles = StyleSheet.create ({  
    myStyle: {  
        marginTop: 20,  
        textAlign: 'center',  
        color: 'green',  
        fontWeight: 'bold',  
        fontSize: 20  
    }  
});
