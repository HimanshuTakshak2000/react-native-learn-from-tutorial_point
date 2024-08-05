// // Example - 1
// import React, { Component } from 'react';  
// import { StyleSheet, Text, View } from 'react-native';  
  
// export default class ImplementingStyle extends Component {  
//     render() {  
//         return (  
//             <View>  
//               {/* All the core components use a prop (property) named style. The style names and values are similar to CSS that works for the web. There is the only difference in the way of writing names using camel casing, e.g fontSize rather than font-size. The style prop is a plain old JavaScript object which is the simplest way for styling our code. There are different ways to design our component, by using inline style and by using StyleSheet.create */}

//                 <Text style={{ backgroundColor: '#a7a6a9', color: 'yellow', fontSize: 20 }}>this is inline style</Text>  
//                 <Text style={styles.green}>just green</Text>  
//                 <Text style={styles.biggray}>just biggray</Text>  
//                 <Text style={[styles.biggray, styles.green]}>biggray, then green</Text>  
//                 <Text style={[styles.green, styles.biggray]}>green, then biggray</Text>  

//               {/* Note :- If we are giving more than one CSS styling then the CSS style which is given at end will we adpotted. */}

//             </View>  
//         );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     biggray: {  
//         color: 'gray',  
//         fontWeight: 'bold',  
//         fontSize: 30,  
//     },  
//     green: {  
//         color: 'green',  
//     },  
// });  

// Example - 2 --> 

import React from 'react';  
import { View } from 'react-native';  
import StyleComponent from './Style/StyleComponent'  
  
export default class App extends React.Component {  
    state = {  
        myState: 'This is my state, style through external style'  
    }  
    render() {  
        return (  
            <View>  

              {/* One of the way to pass String props */}
              {/* <StyleComponent myTextProp = 'This is my state, style through external style' />   */}

              {/* This is also another way to pass props */}
              <StyleComponent myTextProp = {this.state.myState} />

            </View>  
        );  
    }  
}  
