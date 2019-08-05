import {Provider as PaperProvider, Title} from "react-native-paper";
import {SafeAreaView} from "react-native";
import React from "react";
import {styles, theme} from "./themes/Themes";
import {Nav} from "../components/Nav";

export default function ProfileScreen() {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={styles.bottom}>
                <Nav/>
                <Title>Profile</Title>
            </SafeAreaView>
        </PaperProvider>
    );
}
