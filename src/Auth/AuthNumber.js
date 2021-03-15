import React from 'react'
import { Button, SafeAreaView } from 'react-native'
import { StyleSheet, Text, TextInput, Pressable } from 'react-native'

const AuthNumber = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 46}]}>Tell</Text>
            <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Easy and fast way tell us your problem</Text>

            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 32, marginTop: '10%'}]}>Please Enter Your</Text>           
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 32, marginTop: -10}]}>Phone Number</Text>     
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 15, marginTop: '8%'}]}>Please make sure to enter a valid </Text>   
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 14, }]}>phone number here: </Text>   

            <TextInput placeholder="Phone Number" style={styles.txtInput} />

            < Pressable style={[styles.btnStyle,{ marginTop: '30%' }]} onPress={()=> navigation.navigate("OTP Code")} >
                <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Next</Text>
            </ Pressable>
    
        </SafeAreaView>
    )
}

export default AuthNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC7500',
        marginTop: -40
    },
    btnStyle: {
        width: 300,
        height: 40,
        backgroundColor: '#8E0D37',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center'
    },
    txtInput: {
        backgroundColor: '#fff',
        width: '80%',
        height: 40,
        padding: 10,
        marginVertical: 50,
    },
    txtStyle: {
        color: '#fff',
        alignContent: 'center',
    },
})
