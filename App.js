import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';


export default class extends React.Component {

  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    return (
      <Loading />
    );
  }
}
