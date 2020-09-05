import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image, Switch,ScrollView } from 'react-native'


import Icon from 'react-native-vector-icons/AntDesign'

export class SpecialEditWorkScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>แก้ไขตำแหน่งงาน</Text>
                </View>

                <ScrollView>
                    <View style={styles.editWorkContainer}>

                        <View style={styles.editWorkItem}>
                            <Text style={styles.editWorkItemText}>ประเภทอาชีพ</Text>
                            <TouchableOpacity style={styles.editWorkBox} onPress={()=>this.props.navigation.navigate('CareerType')}>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>งานช่าง ระบบประปา ระบบไฟฟ้า และอื่น ๆ</Text>
                                </View>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>งานซ่อมแซมเครื่องใช้ไฟฟ้าและอุปกรณ์</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.editWorkItem}>
                            <Text style={styles.editWorkItemText}>ประเภทงาน</Text>
                            <TouchableOpacity style={styles.editWorkBox}>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ช่างประปา</Text>
                                </View>

                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ช่างไฟฟ้า</Text>
                                </View>

                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ช่างยนต์</Text>
                                </View>

                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ซ่อมแซม - ทั้งหมด</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.editWorkItem}>
                            <Text style={styles.editWorkItemText}>รายละเอียดงาน</Text>
                            <TouchableOpacity style={styles.editWorkBox}>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>เปลี่ยนยางรถยนต์</Text>
                                </View>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ตรวจเช็คระบะ</Text>
                                </View>
                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ซ่อมแซม - รายละเอียดทั้งหมด</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.confirmButton}>
                            <Text style={styles.confirmButtonText}>ยืนยัน</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
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
    editWorkContainer: {
        paddingHorizontal: 30
    },
    editWorkItem: {

    },
    editWorkItemText: {
        fontSize: 20,
        paddingVertical: 10
    },
    editWorkBox: {
        borderColor: '#939393',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        minHeight: 100,
        borderWidth: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    tagsItem: {
        backgroundColor: '#c2edff',
        borderRadius: 7,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        marginTop: 5
    },
    tagsItemText: {
        color: '#0193cf',
        fontSize: 15
    },
    confirmButton: {
        backgroundColor: '#00a9ef',
        marginVertical: 30,
        borderRadius: 30
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 20,
        paddingVertical: 7,
        textAlign: 'center'
    },
})

export default SpecialEditWorkScreen
