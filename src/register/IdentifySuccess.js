import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native'

export default class identitySuccessScreen extends Component {
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
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                        <Image source={require("../assets/images/back.png")} style={{width:25,height:25,marginLeft:"auto",zIndex:100}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:"#009ada",textAlign:"center",alignItems:"center"}}>ยืนยันตัวตน</Text>
                </View>
                <View style={styles.profileContainer}>

                    <View style={styles.profilePictureContainer}>
                        <Image style={styles.profilePicture} source={{
                            uri: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
                        }} />
                        <View style={styles.circlePath}>
                        </View>
                    </View>

                    <Text style={styles.captureDetailText}>ยืนยันตัวตนจากการถ่ายภาพเรียบร้อยแล้ว</Text>

                    <View style={styles.identityButtonContainer}>

                        <TouchableOpacity style={styles.captureButton}>
                            <Text style={styles.captureButtonText}>ถ่ายใหม่</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.confirmButton} onPress={()=>this.props.navigation.navigate('CareerType')}>
                            <Text style={styles.confirmButtonText}>ยืนยัน</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
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
    identityButtonContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: 10
    },
    captureButton: {
        backgroundColor: '#f19801',
        borderRadius: 50,

    },
    captureButtonText: {
        color: '#fff',
        marginVertical: 7,
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'

    },
    confirmButton: {
        backgroundColor: '#38a9ef',
        borderRadius: 50
    },
    confirmButtonText: {
        color: '#fff',
        marginVertical: 7,
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    captureDetailText: {
        marginVertical: 20,
        fontSize: 20
    }
})
