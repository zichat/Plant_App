import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Logo from '../components/Logo'
import COLORS from '../containers/colors'

const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <View style={style.signIn}>
            <Logo/>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    signIn:{
        marginTop: 50,
    }
});

export default SignInScreen;