import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import EvilIcon from 'react-native-vector-icons/EvilIcons'

export class SpecialLoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={{
                    uri: 'https://images.unsplash.com/photo-1579966434818-68e8a82dd5b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                }} >
                    <View style={styles.loginFormContainer}>

                        <Text style={styles.headerFormText}>Special Mr.Blue</Text>
                        <View style={styles.menuFormContainer}>
                            <TouchableOpacity>
                                <Text style={styles.menuFormText}>เข้าสู่ระบบ</Text>
                            </TouchableOpacity>
                            <Text>
                                <EvilIcon name="user" size={60} color="#38a9ef" />
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("specialRegister")}>
                                <Text style={styles.menuFormText}>สมัครสมาชิก</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.loginForm}>
                            <View style={{ width: 30, height: 60, overflow: 'hidden', backgroundColor: "white", top: -20, left: 30, position: 'absolute', transform: [{ rotate: '45deg' }] }} />
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({username: text})}
                                value={this.state.username}
                                underlineColorAndroid='transparent'
                                placeholder="Email"
                            />
                            <TextInput

                                style={styles.inputText}
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity>
                                <Text style={styles.forgetPassword}>ลืมรหัสผ่าน</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    headerFormText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    menuFormContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    menuFormText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    loginFormContainer: {
        alignItems: 'center'
    },
    loginForm: {
        opacity: .9,
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 10
    },
    inputText: {
        height: 40,
        width: 250,
        borderColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
        borderWidth: 1,
        marginTop: 20,
        fontSize: 18
    },
    forgetPassword: {
        color: '#38a9ef',
        textAlign: 'right',
        marginTop: 5
    },
    loginButton: {
        color: '#fff',
        backgroundColor: '#38a9ef',
        textAlign: 'center',
        marginTop: 15,
        borderRadius: 20,
    },
    loginButtonText: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',

    }
})

export default SpecialLoginScreen
