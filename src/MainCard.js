import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'



const MainCard = (props) => {



    const Icon = () => {
        if (props.icon === 'morning') {
            return (
                <Feather style={styles.cardIcon} name="sun" size={30} color="white" />

            )
        }
        if (props.icon === 'afternoon') {
            return (
                <Fontisto style={styles.cardIcon} name="day-cloudy" size={30} color="white" />

            )
        }
        if (props.icon === 'night') {
            return (
                <Fontisto style={styles.cardIcon} name="night-alt-snow" size={30} color="white" />

            )
        }
    }


    const styles = StyleSheet.create({
        card: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: props.backgroundColor,
            margin: 10,
            height: 210,
            width: 110
        },
        cardTitle: {
            color: 'white',
            margin: 15,
            fontSize: 20


        },

        cardIcon: {
            color: 'white',
            margin: 15

        },

    })



    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Icon>{ }</Icon>
            <Text style={styles.cardTitle}>{props.temperature}°</Text>
        </View>
    )
}







export default MainCard