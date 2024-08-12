// Flexbox Positioning -->

// // Example - 1
// import React, { Component } from "react";  
// import { StyleSheet, TextInput, View , Button, Alert } from "react-native";  
  
// export default class App extends Component {  

//     state = {  
//         placeName: "",  
//     };  
  
//     placeNameChangedHandler = (val: any) => {  
//         this.setState({  
//             placeName: val  
//         });  
//     };  
  
//     placeSubmitHandler = () => {  
//         Alert.alert("button clicked")  ;
//     };  
  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <TextInput  
//                         placeholder="An awesome place"  
//                         onChangeText={this.placeNameChangedHandler}  
//                 />  
//                 <Button  
//                         title="Button"  
//                         onPress={this.placeSubmitHandler}  
//                 />  
//             </View>  
//         );  
//     }  
// }  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         padding: 26,  
//         justifyContent: "flex-start"  
//     }  
// });  

// ============================================================== //


// // Example - 2
// import React, { Component } from "react";  
// import { StyleSheet, View, TextInput, Button, Alert } from "react-native";  
  
// export default class App extends Component {  
//     state = {  
//         placeName: "",  
//     };  
  
//     placeNameChangedHandler = (val: any) => {  
//         this.setState({  
//             placeName: val  
//         });  
//     };  
  
//     placeSubmitHandler = () => {  
//         Alert.alert("button clicked")  
//     };  
  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <View style={styles.innerContainer}>  
//                     <TextInput  
//                             placeholder="An awesome place"  
//                             onChangeText={this.placeNameChangedHandler}  
//                     />  
//                     <Button  
//                             title="Button"  
//                             onPress={this.placeSubmitHandler}  
//                     />  
//                 </View>  
//             </View>  
//         );  
//     }  
// }  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         padding: 26,  
//         justifyContent: "flex-start"  
//     },  
    
//     innerContainer:{  
//         flex: 1,  
//         flexDirection: "row"  
//     }  
// });  

// // Note :- The flex: 1 for inner View occupy full space which does not look good as the TextInput and Button occupy all space from top to bottom.


// ============================================================== //


// Example - 3

import React, { Component } from "react";  
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";  
  
export default class App extends Component {  
    state = {  
        placeName: "",    
    };  
  
    placeNameChangedHandler = (val : any) => {  
        this.setState({  
            placeName: val  
        });  
    };  
  
    placeSubmitHandler = () => {  
        Alert.alert("button clicked")  
    };  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.innerContainer}>  
                    <TextInput  
                            placeholder="An awesome place"  
                            onChangeText={this.placeNameChangedHandler}  
                            style={styles.textStyle}  
                    />  
                    <Button  
                            title="Button"  
                            onPress={this.placeSubmitHandler}  
                    />  
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 26,  
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  
    },  
    innerContainer:{   
        flexDirection: "row",  
        justifyContent: "space-between",  
        alignItems: "center"  
    },  
    textStyle:{  
        width: "70%",  
        backgroundColor: "gray",  
    },  
    buttonStyle:{  
        width: "30%",  
    }  
});  


// ============================================================== //







