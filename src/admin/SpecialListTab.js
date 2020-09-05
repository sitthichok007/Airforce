import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SpecialWorkScreen from './SpecialWorkScreen';
import SpecialHistoryScreen from './SpecialHistory';

import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createMaterialTopTabNavigator();

export default function SpecialListTab({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <Icon name="left" size={30} color='#fff' />
                </TouchableOpacity>
                <Text style={styles.navigationText}>รายการงาน</Text>
            </View>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#00a9ef',
                        inactiveTintColor: '#939393',
                        labelStyle: { fontSize: 18 },
                        indicatorStyle: {
                            backgroundColor: '#c2edff'
                        }
                    }}>
                    <Tab.Screen name="ปฏิบัติงาน" component={SpecialWorkScreen} />
                    <Tab.Screen name="ประวัติงาน" component={SpecialHistoryScreen} />
                </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    navigation: {
        width: '100%',
        height: 120,
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#38a9ef',
        paddingHorizontal: 30
    },
    goBack: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navigationText: {
        fontSize: 30,
        color: '#fff',
        position: 'absolute',
        right: 0,
        left: 0,
        textAlign: 'center',
        zIndex: -9999
    },
    container: {
        flex: 1,
        color: '#fff'
    },
})
