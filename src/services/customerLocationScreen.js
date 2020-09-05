import React, { Component } from 'react'
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export class CustomerLocationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.maps}
                    initialRegion={{
                        latitude: 16.439625,
                        longitude: 102.828728,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                />


                <View style={styles.locationDetailContainer}>
                    <Text style={styles.headerText}>ตำแหน่งบ้านลูกค้า</Text>
                    <View style={styles.addressContainer}>
                        <TouchableOpacity>
                            <EvilIcons name="location" size={50} color="#00a9ef" />
                        </TouchableOpacity>
                        <Text style={styles.addressText}>
                            MAP ACTIVE (Thailand) Ldt 43 Thai CC Tower 156-7 Rm. 15 FL South Satorn Road
                        </Text>
                        <TouchableOpacity>
                            <EvilIcons name="search" size={50} color="#00a9ef" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.chooseButton} onPress={()=>this.props.navigation.navigate('myaddress')}>
                    <Text style={styles.chooseButtonText}>เลือก</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff'
    },
    maps: {
        flex: 1
    },
    locationDetailContainer: {},
    headerText: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginVertical: 20,
        color: '#00a9ef'
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 50
    },
    addressText: {
        width: 280,
        color: '#00a9ef'
    },
    chooseButton: {
        backgroundColor: '#00a9ef',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 30
    },
    chooseButtonText: {
        color: '#fff',
        paddingVertical: 7,
        textAlign: 'center',
        fontSize: 18
    }
})

export default CustomerLocationScreen
