import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Routes } from "../navigation/Routes";
import { LinearGradient } from 'react-native-linear-gradient'




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

            <Image
                style={styles.image}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Emblem_of_the_First_Galactic_Empire.svg/1200px-Emblem_of_the_First_Galactic_Empire.svg.png",
                }}
            />
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
                <Button style={styles.button} onPress={navigateToFeed}>
                    <Text style={styles.text}>Login</Text>
                </Button>


                <View>
                    <TouchableOpacity onPress={navigateToTerms}>
                        <Text style={styles.condition}>Lire les conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>


    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#45549F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    view: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    email: {

        width: 350,
        marginTop: 30,

    },
    password: {
        width: 350,
        marginTop: 30,
        marginBottom: 30,
        color: 'blue',

    },

    titlePage: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 70,
        padding: 5,
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 150,


    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    condition: {
        color: 'white',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    }




});








