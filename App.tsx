// Example - 1
// // Fixed Dimensions - Using fixed height and fixed width in style is the simplest way to set the dimension of the component. The dimensions of React Native component are unit-less and they represent density-independent pixels.Setting the dimension of component with fixed size is common and exactly the same size, regardless of screen dimensions.

// import React, { Component } from 'react';  
// import { StyleSheet, View } from 'react-native';  
  
// export default class HeightWidth extends Component {  
//     render() {  
//         return (  
//             <View style={{margin:10, backgroundColor:'white'}}>  
//                 <View style={styles.powderblue} />  
//                 <View style={styles.skyblue} />  
//                 <View style={styles.steelblue} />  
//             </View>  
//         );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     powderblue:{  
//         width: 100, height: 100, backgroundColor: 'powderblue'  
//     },  
//     skyblue:{  
//         width: 200, height: 200, backgroundColor: 'skyblue'  
//     },  
//     steelblue:{  
//         height: 300, backgroundColor: 'steelblue'  
//     },  
// })  


// Example - 2 
// Flex Dimensions - The flex property styles the component to expand and shrink it dynamically according to available space. Setting flex: 1 will fill all the available space to the component and shared evenly among the other components of same as the parent. Higher the flex value, occupy component higher ratio of space compared to its siblings.

import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native';  
  
export default class HeightWidth extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.powderblue} />  
                <View style={styles.skyblue} />  
                <View style={styles.steelblue} />  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container:{  
      flex:1,
      margin:15,
      borderColor:'red',
      borderWidth:2,  
    },  
    powderblue:{  
        flex:1,  
        backgroundColor: 'powderblue',  
    },  
    skyblue:{  
        flex:2,  
        backgroundColor: 'skyblue',  
    },  
    steelblue:{  
        flex:3,  
        backgroundColor: 'steelblue',  
    },  
}) 



