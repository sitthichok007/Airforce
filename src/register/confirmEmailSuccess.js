import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'

export class ConfirmEmailSuccessScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:"row",alignItems:"center",
                    paddingLeft:30,
                    paddingTop:10,
                    paddingBottom:20,
                    backgroundColor:"white",
                    shadowRadius: 2,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowColor: '#000000',
                    elevation: 4,
                    shadowOpacity: 0.10
                }}>
                    <Text style={{fontSize:20,color:"#009ada",textAlign:"center",alignItems:"center"}}>ยืนยันตัวตน</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.profileContainer}>



                        <View style={styles.profilePictureContainer}>
                            <Image style={styles.profilePicture} source={{
                                uri: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
                            }} />
                            <View style={styles.circlePath}>
                            </View>
                        </View>

                        <Text style={styles.confirmHeaderText}>ยืนยันตัวตนสำเร็จ!</Text>
                        <Text style={styles.confirmDetailText}>โปรดรอการอนุมัติ</Text>



                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    profileContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
    profilePictureContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 300,
        height: 300,
        borderRadius: 150,
        position: 'relative'
    },
    circlePath: {
        width: 270,
        height: 270,
        borderRadius: 270,
        borderColor: '#fff',
        borderWidth: 5,
        position: 'absolute'
    },
    confirmHeaderText: {
        marginVertical: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    confirmDetailText: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ConfirmEmailSuccessScreen
