// // Example - 1
// import React, { Component } from 'react';  
// import {   
//   StyleSheet,  
//   Image,  
//   Text,  
//   View  
// } from 'react-native';  
  
  
// export default class App extends Component<{}> {  
//   render() {  
//     let imagePath = { uri: 'https://facebook.github.io/react-native/img/header_logo.png'};  
//     return (  
//         <View style={styles.container}>  
//           <Text style={styles.welcome}>Welcome to React Native!</Text>  
//           <Image source={imagePath} style={{width: 250, height: 250}} />  
//         </View>  
//     );  
//   }  
// }  
  
// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center',  
//     backgroundColor: '#a7a6a9',  
//   },  
//   welcome: {  
//     fontSize: 30,  
//     textAlign: 'center',  
//     margin: 20,  
//   }  
// });  

// Example - 2 -->

import React, { Component } from 'react';  
import { StyleSheet, Text, View } from 'react-native';  
  
class ChildClass extends Component<{name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined}> {   // we must send props name in components type
  render() {  
    return (  
        <View style={{alignItems: 'center'}}>  
          <Text style={styles.welcome}>Hello {this.props.name}!</Text>  
        </View>  
    );  
  }  
}  
  
export default class ParentsClass extends Component {  
  render() {  
    return (  
        <View style={{alignItems: 'center'}}>  
          <ChildClass name='Ashu' />  
          <ChildClass name='Aman' />  
          <ChildClass name='Max' />  
        </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
   welcome: {  
    fontSize: 30,  
  }  
});  
