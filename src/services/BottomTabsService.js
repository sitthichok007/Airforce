import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ImageBackground, View} from "react-native";
import React from "react"
import TabService from "./TabBottomComponent";
import ServiceDetailScreen from "./ServiceDetailScreen";

const Tab = createBottomTabNavigator();


function HomeScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
                source={require("../assets/images/house.jpg")}
                style={{width: '100%', height: '100%'}}
            >

            </ImageBackground>

        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
         tabBar={props => <TabService {...props} />}
        >
            <Tab.Screen name="Home"
                        options={{
                            tabBarLabel: 'แชท',
                            color:"Yellow",
                            fontSize:16
                        }}
                        component={ServiceDetailScreen} />
            <Tab.Screen name="Settings"
                        options={{
                            tabBarLabel:'เลือกบริการ',
                            fontSize:25,
                            fontWeight:"bold"
                        }}
                        component={HomeScreen} />
        </Tab.Navigator>
    );
}
export default MyTabs
