// SectionList --> The React Native SectionList component is a list view component which sets the list of data into broken logical section. The broken data can be implemented using its section header prop renderSectionHeader. To implement the SectionList component, we need to import SectionList from 'react-native' library. The sections prop is used to create the list of title and data values. The renderSectionHeader displays the header section of the list view.

// ItemSeparatorComponent prop adds the Separator between the lists of data. Using this prop, call a renderSeparatormethod in which we add a View component as separator.

// To perform an action on clicking (pressing) the list item, we use a onPress prop. The onPress prop and handle the event in another method getListViewItem.


// Example - 1
import React, { Component } from 'react';  
import { SectionList, StyleSheet, Text, View, Alert } from 'react-native';  
  
export default class SectionListBasics extends Component {  

    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    
    //handling onPress action  
    getListViewItem = (item: any) => {  
        Alert.alert(item);  
    }  


    render() {  
        return (  
            <View style={styles.container}>  
                <SectionList  
                    sections={[  
                        {
                            title: 'A', 
                            data: ['ALTERED','ABBY','ACTION U.S.A.','AMUCK','ANGUISH']
                        }, 

                        {
                            title: 'B', 
                            data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']
                        }, 
                         
                        {
                            title: 'C', 
                            data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]
                        },  
                    ]}  
                    renderItem={({item}) => <Text style={styles.item} onPress={this.getListViewItem.bind(this, item)} >{item}</Text>}  
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  

                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#5ead97"  
    },  

    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#8fb1aa',  
    }, 

    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 50,  
    }  
})  








