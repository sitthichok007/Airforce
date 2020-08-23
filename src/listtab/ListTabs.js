import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BackLogScreen from './BackLogScreen';
import RequestScreen from './RequestScreen';
import HistoryScreen from './HistoryScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor:'#00a9ef',
                        inactiveTintColor: '#939393',
                        labelStyle: { fontSize: 18 },
                        indicatorStyle :{
                            backgroundColor:'#00a9ef'
                        }
                    }}>
                    <Tab.Screen name="รอตอบรับ" component={RequestScreen} />
                    <Tab.Screen name="งานค้าง" component={BackLogScreen} />
                    <Tab.Screen name="ประวัติงาน" component={HistoryScreen} />
                </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


