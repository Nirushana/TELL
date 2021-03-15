import React from 'react';
import { SafeAreaView } from 'react-native';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const RegistrationSrc = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 46}]}>Tell</Text>
            <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Easy and fast way tell us your problem</Text>

    
            <Text style={[styles.txtStyle, {fontWeight: 'bold', fontSize: 32, marginTop: 20, marginRight: '40%'}]}>Register</Text>

        <View style={{ width: '100%',justifyContent: 'center', alignItems: 'center', marginTop: '8%' }} >
            <TextInput placeholder="Name" autoFocus style={styles.txtInput} />
            <TextInput placeholder="NIC" style={[styles.txtInput,{ marginTop: 20 }]} />
            <TextInput placeholder="Email" style={[styles.txtInput,{ marginTop: 20 }]} />
            <TextInput placeholder="Password" secureTextEntry style={[styles.txtInput,{ marginTop: 20 }]} />
     
            <Text style={[styles.txtStyle, {marginTop: 60, fontWeight: 'bold'}]}>
                By Registering, you agree with our
            </Text>
            <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>
                Terms of Conditions and Privacy Policy  
            </Text>

            <Pressable style={[styles.btnStyle,{ marginTop: 50 }]} onPress={()=> navigation.navigate("Authentication Number")} >
                <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Register</Text>
            </Pressable>

            <Pressable style={{marginTop: 40}} onPress={() => navigation.navigate('Login')} >
                <Text style={[styles.txtStyle, {fontWeight: 'bold'}]}>Already have an account? Login</Text>
            </Pressable>
        </View>
    </SafeAreaView>
    )
}

export default RegistrationSrc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC7500',
        marginTop: -20
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

