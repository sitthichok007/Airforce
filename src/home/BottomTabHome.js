
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text, View,ImageBackground} from 'react-native';
import ServiceScreen from './serviceScreen';
import ProfileScreen from '../profile/ProfileScreen'
import ChatScreen from "../chat/chatScreen";
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/AntDesign'
import TabBottomHome from '../components/TabBottomHome';
import ListTabs from "../listtab/ListTabs";
import Ant from 'react-native-vector-icons/AntDesign'



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
function HomeScreenV2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HomeV2!</Text>
        </View>
    );
}


export default function BottomTabHome() {
  return(
      <>
          <Tab.Navigator
              tabBar={props => <TabBottomHome {...props} />}
          >
              <Tab.Screen
                  options={{headerShown:false}}
                  name="ServiceScreen" component={ServiceScreen}
                          options={{
                              tabBarLabel: 'งานบริการ',
                              color:"Yellow"
                          }}
              />
              <Tab.Screen name="Home" component={ListTabs}
                          options={{
                              tabBarLabel: 'รายการ',
                              color:"Yellow"
                          }}
              />
              <Tab.Screen name="HomeV2" component={ChatScreen}
                          options={{
                              tabBarLabel: 'แชท',
                              color:"Yellow"
                          }}
              />
              <Tab.Screen name="Profile" component={ProfileScreen}
                          options={{
                              tabBarLabel: 'ฉัน',
                              color:"Yellow"
                          }}
              />
          </Tab.Navigator>
      </>
  )
}
