import React, { Component } from 'react'
import {Text, View, StyleSheet, SafeAreaView, Image,TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'

export class ConfirmEmailScreen extends Component {
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
                <View style={styles.confirmEmailContainer}>
                    <Text style={styles.headerText}>
                        กรุณาลงทะเบียนกับ Air Force Service ให้เสร็จสมบูรณ์ด้วยการยืนยันอีเมลของคุณค่ะ
                    </Text>

                    <Text style={styles.emailIcon}>
                        <Icon name="mail" size={100} color="#03b3fd" />
                    </Text>

                    <Text style={styles.emailText}>sommale@gmail.com</Text>

                    <TouchableOpacity style={styles.confirmButton} onPress={()=>this.props.navigation.navigate('confirmEmailSuccess')}>
                        <Text style={styles.confirmButtonText}>คลิกเพื่อยืนยันอีเมล</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    confirmEmailContainer: {
        paddingHorizontal: 30
    },
    headerText: {
        fontSize: 16,
        color: '#03b3fd',
        textAlign: 'center',
        marginTop: 60
    },
    emailIcon: {
        marginVertical: 10,
        textAlign: 'center'
    },
    emailText: {
        color: '#939393',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#03b3fd',
        marginVertical: 30,
        borderRadius: 30
    },
    confirmButtonText: {
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#fff'
    }
})

export default ConfirmEmailScreen
