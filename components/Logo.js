import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../containers/colors';

const image = require('../assets/plant3.png');
const Logo = () => {
  return (
    <View style={style.logo}>
        <Image source={image} style={style.image}/>
        <Text style={style.logoText}>Plant Shop</Text>
    </View>
  )
}

const style = StyleSheet.create({
    logoText:{
        fontSize: 25,
        color: COLORS.green,
        margin:5,
        fontWeight:'bold',
    },
    image:{
        width:100,
        height:100
    },

    logo:{
        margin:50,
        alignItems:'center',
        justifyContent: 'center',
    }

});
export default Logo