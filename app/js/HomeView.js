import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Alert} from 'react-native';
import ShuttleBusList from './ShuttleBusList';
import ShuttleBusInfo from './ShuttleBusInfo';

export default class HomeView extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>WELCOME!</Text>
                <TouchableHighlight onPress={this.goAnnouncement.bind(this)}>
                  <Text style = {styles.buttonAnn}>Announcement</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor ={'pink'} onPress={this.goShuttleBus.bind(this)}>
                  <Text style = {styles.buttonSB}>Shuttle Bus List</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goAnnouncement.bind(this)}>
                  <Text style = {styles.buttonAnn}>Carpool</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goAnnouncement.bind(this)}>
                  <Text style = {styles.buttonAnn}>Forum</Text>
                </TouchableHighlight>
            </View>
        )
    }
    goAnnouncement() {
        Alert.alert('WORK IN PROGRESS');
    }
    goShuttleBus() {
    console.log("go to Shuttle Bus");
    this.props.navigator.push({ screen: 'ShuttleBusList' });
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonAnn: {
    borderWidth: 1,
      padding: 25,
      backgroundColor: 'white',
      borderColor: 'black'
  },
  buttonSB: {
      borderWidth: 1,
      padding: 25,
      backgroundColor: 'red',
      borderColor: 'black'
  }
})

 