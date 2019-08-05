import React from "react";
import {NavigationScreenProp, withNavigation} from "react-navigation";
import {Appbar} from "react-native-paper";

interface NavProps {
    router: Routable
}

export class NavBar extends React.Component<NavProps> {
    render() {
        const navigate = this.props.router;

        return (
            <Appbar>
                <Appbar.BackAction onPress={() => navigate.back()}/>
                <Appbar.Action icon="archive" onPress={() => navigate.home()}/>
                <Appbar.Action icon="mail" onPress={() => navigate.profile()}/>
            </Appbar>
        );
    }
}

type RoutableProps = {
    navigation: NavigationScreenProp<any, any>
}

class Routable {
    private navigation: NavigationScreenProp<any, any>;

    constructor(navigation: NavigationScreenProp<any, any>) {
        this.navigation = navigation;
    }

    home() {
        console.log("home")
        this.navigation.navigate("Home")
    }

    back() {
        console.log("back")
        this.navigation.goBack()
    }

    profile() {
        console.log("profile")
        this.navigation.navigate("Profile")
    }
}

function withRouter(Component) {
    return withNavigation(
        class extends React.Component<RoutableProps> {
            render() {
                const nav = this.props.navigation;
                return (
                    <Component router={new Routable(nav)}/>
                );
            }

        }
    );
}

export const Nav = withRouter(NavBar);
