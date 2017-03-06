import React, { Component} from 'react';
import {View, Text,  StyleSheet, TouchableHighlight } from 'react-native';

export default class ShuttleBusInfo extends Component {
    
    render() {
        var bus = this.props.bus;
        console.log(bus);
        //var features = (typeof buses.features !== 'undefined') ? buses.features : 'no features';
        return (
            <View style={styles.container}>
                <Text style = {styles.bigRect}>Map View here</Text>     
                <Text style={styles.features}>{bus.features}</Text>
                <View style = {styles.separator}/>
                <Text>Signage example:</Text>
                
                     <Text style={styles.rectangle}>{bus.notes.signage}</Text>
                
            
            <TouchableHighlight onPress={this.goBack.bind(this)}>
                <Text>Go Back</Text>
            </TouchableHighlight>
             </View>
        );
    }

    goBack() {
    console.log("go to back");
    this.props.navigator.pop({ screen: 'ShuttleBusList' });
  }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    features: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   rectangle: {
       height: 100,
       width: 100* 2,
       backgroundColor: 'white',
       borderColor: 'black',
       justifyContent: 'center',
       alignItems: 'center'
   },
   bigRect: {
       height: 200,
       width: 200*2,
       backgroundColor: 'white',
       borderColor: 'black',
       justifyContent: 'center',
       alignItems: 'center'
   }
});
