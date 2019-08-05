import {DefaultTheme} from "react-native-paper";
import {StyleSheet} from "react-native";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

export const styles = StyleSheet.create({
    bottom: {
        flex: 1,
    }
});
