import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Routes } from "../navigation/Routes";



export const LoginScreen = ({ navigation }: any) => {
    const [text, setText] = React.useState("");

    // --- Navigate to TermsScreen 
    function navigateToTerms() {
        navigation.navigate(Routes.TERMS_SCREEN);
    };

    function navigateToFeed() {
        navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
    };




    // --- Front of page 
    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.view}>
                <View style={styles.email}>
                    <TextInput
                        autoComplete={false}
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View style={styles.password}>
                    <TextInput
                        autoComplete={false}
                        label="Password"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>


                <Button style={styles.button} icon="login" onPress={navigateToFeed}>
                    Login
                </Button>



                <View>
                    <TouchableOpacity onPress={navigateToTerms}>
                        <Text>Lire les conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    view: {
        //justifyContent: 'center',
        //alignItems: 'center'

    },
    email: {

        width: 350

    },
    password: {
        width: 350,
        marginTop: 30,
        marginBottom: 30,

    },

    titlePage: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {

        padding: 5,
        backgroundColor: 'blue',

    },


});








