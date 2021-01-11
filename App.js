import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';


export default class extends React.Component {

  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      // TODO: Сделать запрос к API
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading} = this.state;
    return (
      isLoading ? <Loading /> : null
    );
  }
}
