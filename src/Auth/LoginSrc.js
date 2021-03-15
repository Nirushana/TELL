import React from 'react';
import { SafeAreaView, Pressable } from 'react-native';
import { StyleSheet, Text, View,TextInput } from 'react-native';

const LoginSrc = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 46}]}>Tell</Text>
            <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Easy and fast way tell us your problem</Text>

        
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 32, marginTop: 20, marginRight: '20%'}]}>Welcome back!</Text>
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 24, marginRight: '45%'}]}>Login Now</Text>

        <View style={{ width: '100%',justifyContent: 'center', alignItems: 'center', marginTop: '32%' }} >
            <TextInput placeholder="Email" style={styles.txtInput} />
            <TextInput placeholder="Password" secureTextEntry style={[styles.txtInput,{ marginTop: 25 }]} />
            <Pressable onPress={() => navigation.navigate("Forget Password")} style={{marginTop: 15}}>
                <Text style={[styles.txtStyle, {fontWeight: 'bold', marginLeft: 100}]}>Forgot Password? Click here</Text>
            </Pressable>

            <Pressable style={[styles.btnStyle,{ marginTop: 90 }]}>
                <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Login</Text>
            </Pressable>

            <Pressable style={{marginTop: 40}} onPress={() => navigation.navigate('Registration')} >
                <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 15, }]}>Don't Have an Account? Register Now</Text>
            </Pressable>
        </View>
        </SafeAreaView>
    )
}

export default LoginSrc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC7500'
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
    },
    txtStyle: {
        color: '#fff',
        alignContent: 'center',
    },
})
