import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073']
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1CB5E0']
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8']
    },
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/> 
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
            
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    }
})