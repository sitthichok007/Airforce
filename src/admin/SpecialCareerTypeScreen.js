import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import AntIcon from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';


import Icon from 'react-native-vector-icons/AntDesign'


export class SpecialCareerTypeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            checked: false
        }
    }

    isChecked = (value) => {
        console.log(value)
    }

    render() {

        const checkBoxItem = ['ทั้งหมด', 'งานแม่บ้าน ดูแลสวน', 'งานช่าง ระบบประปา ระบบไฟฟ้า และอื่นๆ', 'งานซ่อมแซมเครื่องใช้ไฟฟ้าและอุปกรณ์', 'งานสั่งซื้อสินค้า และบริการ', 'งานเช่ารถ คนส่งอาหาร']
        const tagsItem = ['งานช่าง ระบบประปา ระบบไฟฟ้า และอื่นๆ', 'งานซ่อมแซมเครื่องใช้ไฟฟ้าและอุปกรณ์']

        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="close" size={30} color='#329ada' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>เลือกประเภทอาชีพ</Text>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <AntIcon name="search1" size={20} color="#38a9ef" />
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(text) => this.setState({ searchText: text })}
                            value={this.state.searchText}
                            underlineColorAndroid='transparent'
                            placeholder="ระบุหมวดหมู่อาชีพ"
                        />
                    </View>
                    <View style={styles.tagsSearchContainer}>
                        {
                            tagsItem.map((value, key) => {
                                return (
                                    <View key={key} style={styles.tagsSearch}>
                                        <Text style={styles.tagsSearchText}>{value}</Text>
                                        <AntIcon name="close" size={20} color="#38a9ef" style={{ paddingRight: 10 }} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.checkBoxContainer}>
                        {
                            checkBoxItem.map((value, index) => {
                                return (
                                    <View key={index} style={styles.checkBox}>
                                        <CheckBox
                                            boxType='square'
                                            disabled={false}
                                            value={this.state.checked}
                                            onValueChange={(check) => this.isChecked(check)}
                                            onAnimationType="stroke"
                                            offAnimationType="fade"
                                            onCheckColor="#fff"
                                            onTintColor="#00a9ef"
                                            tintColor="#00a9ef"
                                            onFillColor="#00a9ef"
                                            animationDuration={.1}
                                        />
                                        <Text style={styles.checkBoxText}> {value} </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                <View style={styles.toolsContainer}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>ตกลง</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    navigation: {
        width: '100%',
        height: 80,
        justifyContent: 'flex-start',
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
        flexDirection: 'row',
        alignItems: 'center'
    },
    goBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 20,
        justifyContent:'flex-end'
    },
    navigationText: {
        fontSize: 22,
        color: '#329ada',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        paddingLeft: 10,
        zIndex: -9999
    },
    container: {
        flex: 1,
    },
    searchContainer: {
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 50,
        backgroundColor: '#efefef'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#939393',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    inputText: {
        fontSize: 18,
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10
    },
    tagsSearchContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    tagsSearch: {
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: '#c2edff',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagsSearchText: {
        fontSize: 16,
        padding: 7,
        color: '#38a9ef'
    },
    checkBoxContainer: {
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    checkBox: {
        flexDirection: 'row',
        marginVertical: 10
    },
    checkBoxText: {
        fontSize: 16,
        marginLeft: 10,
        paddingLeft: 10
    },
    checkbox: {
        alignSelf: "center",

    },
    toolsContainer: {
        paddingHorizontal: 50,
    },
    nextButton: {
        marginVertical: 30,
        backgroundColor: '#38a9ef',
        borderRadius: 50
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 7
    }

})

export default SpecialCareerTypeScreen
