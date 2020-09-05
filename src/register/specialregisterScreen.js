import React, { Component } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TextInput, Picker, Platform, Image,ScrollView, TouchableOpacity} from 'react-native'


import DropDownPicker from 'react-native-dropdown-picker';

export class SpecialRegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            idCard: '',
            phone: '',
            address: '',
            gender: '',
            serviceType: 'สมาชิกครอบครัวทหารอากาศ',
            rank: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            confirmDocument: '',
            relationshipType: 'บิดา'
        }
    }

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
                    <Text style={{fontSize:20,color:"#009ada",textAlign:"center",alignItems:"center"}}>สมัครสมาชิก</Text>
                </View>
                <ScrollView>
                    <View style={styles.formContainer}>
                        <Text style={styles.headerText}>Special Mr.Blue</Text>
                    </View>
                    <View style={styles.registerForm}>
                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ชื่อ
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ firstname: text })}
                                value={this.state.firstname}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                นามสกุล
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ lastname: text })}
                                value={this.state.lastname}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                หมายเลขบัตรประจำตัวประชาชน
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ idCard: text })}
                                value={this.state.idCard}
                                underlineColorAndroid='transparent'
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                เบอร์โทรศัพท์
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ phone: text })}
                                value={this.state.phone}
                                underlineColorAndroid='transparent'
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ที่อยู่
                            </Text>
                            <TouchableOpacity style={styles.addAddressButton}>
                                <Text style={styles.addAddressButtonText}>เพิ่มที่อยู่</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                เพศ
                            </Text>
                            <View style={styles.chooseGender}>
                                <TouchableOpacity style={styles.chooseGenderButton}>
                                    <Text style={styles.chooseGenderButtonText}>ชาย</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.chooseGenderButton}>
                                    <Text style={styles.chooseGenderButtonText}>หญิง</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ประเภทผู้ให้บริการ
                            </Text>
                            <DropDownPicker
                                items={[
                                    { label: 'สมาชิกครอบครัวทหารอากาศ', value: 'สมาชิกครอบครัวทหารอากาศ' },
                                    { label: 'บุคคลทั่วไป', value: 'บุคคลทั่วไป' },
                                ]}
                                defaultValue={this.state.serviceType}
                                onChangeItem={item => this.setState({
                                    serviceType: item.value
                                })}
                                containerStyle={{ height: 57 }}
                                labelStyle={{ fontSize: 18, color: '#000' }}
                                style={{
                                    borderColor: '#939393',
                                    backgroundColor: '#fff',
                                    marginVertical: 7,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                arrowColor="#38a9ef"
                                arrowSize={20}
                                dropDownStyle={{
                                    backgroundColor: '#fff'
                                }}
                                zIndex={5000}
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ประเภทผู้ให้บริการ
                            </Text>
                            <DropDownPicker
                                items={[
                                    { label: 'บิดา', value: 'บิดา' },
                                    { label: 'มารดา', value: 'มารดา' },
                                ]}
                                defaultValue={this.state.relationshipType}
                                onChangeItem={item => this.setState({
                                    relationshipType: item.value
                                })}
                                containerStyle={{ height: 57 }}
                                labelStyle={{ fontSize: 18, color: '#000' }}
                                style={{
                                    borderColor: '#939393',
                                    backgroundColor: '#fff',
                                    marginVertical: 7,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                arrowColor="#38a9ef"
                                arrowSize={20}
                                dropDownStyle={{
                                    backgroundColor: '#fff'
                                }}
                                zIndex={3000}
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                อีเมล (ทอ.)
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ชื่อผู้ใช้
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ username: text })}
                                value={this.state.username}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                รหัสผ่าน
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                ยืนยันรหัสผ่าน
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                                value={this.state.confirmPassword}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                            />
                        </View>


                        <View style={styles.alignLabel}>
                            <Text style={styles.labelForm}>
                                แนบเอกสารยืนยัน
                            </Text>
                            <View style={styles.attrFile}>
                                <TouchableOpacity style={styles.attrFileButton}>
                                    <Text style={styles.attrFileButtonText}>รูปภาพ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.attrFileButton}>
                                    <Text style={styles.attrFileButtonText}>เอกสาร</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.confirmButton} onPress={()=>this.props.navigation.navigate('Identify')}>
                            <Text style={styles.confirmButtonText}>ยืนยัน</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    formContainer: {
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        color: '#38a9ef',
        marginVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    registerForm: {
        paddingHorizontal: 50
    },
    inputText: {
        fontSize: 18,
        height: 40,
        width: '100%',
        borderColor: '#939393',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 7
    },
    alignLabel: {
        marginVertical: 5
    },
    labelForm: {
        color: '#38a9ef',
        fontSize: 18,
    },
    addAddressButton: {
        marginVertical: 7,
        backgroundColor: '#47b56c',
        borderRadius: 10,
        alignSelf: 'flex-start'
    },
    addAddressButtonText: {
        color: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 18,
    },
    chooseGender: {
        flexDirection: 'row',
        marginVertical: 7,
    },
    chooseGenderButton: {
        alignSelf: 'flex-start',
        marginRight: 10,
        borderColor: '#939393',
        borderWidth: 1,
        borderRadius: 10
    },
    chooseGenderButtonText: {
        color: '#939393',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18
    },
    serviceTypeDropdown: {
        backgroundColor: 'white'
    },
    attrFile: {
        flexDirection: 'row',
        marginVertical: 7,
        justifyContent: 'space-between'
    },
    attrFileButton: {
        alignSelf: 'flex-start',
        marginRight: 10,
        borderColor: '#939393',
        borderWidth: 1,
        borderRadius: 10
    },
    attrFileButtonText: {
        color: '#939393',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18
    },
    confirmButton: {
        backgroundColor: '#38a9ef',
        borderRadius: 30,
        marginVertical: 7
    },
    confirmButtonText: {
        color: '#fff',
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 20
    }
})

export default SpecialRegisterScreen
