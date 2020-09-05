import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image,TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'


export class LocationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{position:"absolute",top:60,zIndex:10,left:20}} onPress={()=>this.props.navigation.goBack()}>
                    <Image source={require("../assets/images/back.png")} style={{width:20,height:20}} />
                </TouchableOpacity>
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
                <View style={styles.boxContainer}>
                    <View style={styles.boxNotice}>
                        <Ionicons name="notifications-outline" size={30} color="#00a9ef" />
                        <Text style={styles.noticeText}>ผู้ให้บริการกำลังเดินทางมาหาคุณ</Text>
                    </View>

                    <View style={styles.boxService}>
                        <View style={styles.boxServiceContainer}>
                            <Image style={styles.imageService} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.serviceInfo}>
                                <Text style={styles.serviceText}>
                                    สมชาย ช่างซ่อม
                                </Text>
                                <View style={styles.serviceMedal}>
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#2ca0ff" />
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#873839" />
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#ffbb00" />
                                </View>
                            </View>
                            <View style={styles.serviceTools}>
                                <FeatherIcons name="message-circle" size={32} color="#00a9ef" />
                                <FeatherIcons name="phone" size={32} color="#00a9ef" />
                            </View>
                        </View>
                        <View style={styles.serviceMore}>
                            <FeatherIcons name="arrow-down" size={25} color="#00a9ef" />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    maps: {
        flex: 1,
        zIndex:-1
    },
    boxContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%',
        margin: 'auto',
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    boxNotice: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 5,
        alignItems: 'center',
        width: '95%',
    },
    noticeText: {
        fontSize: 18,
        color: "#00a9ef"
    },
    boxService: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 3,
        marginTop: 10,
        flexDirection: "column",
        borderRadius: 5,
        width: '95%'
    },
    boxServiceContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    imageService: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    serviceInfo: {
        flexDirection: 'column',
    },
    serviceMedal: {
        flexDirection: 'row'
    },
    serviceText: {
        fontSize: 24,
        color: "#00a9ef"
    },
    serviceTools: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    serviceMore: {
        alignItems: 'center'
    }
})

export default LocationScreen
