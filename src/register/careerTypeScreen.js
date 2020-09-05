import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, ScrollView, Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import AntIcon from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';

export class CareerTypeScreen extends Component {

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

        const checkBoxItem = ['ทั้งหมด', 'Graphic & Design', 'การตลาดและโฆษณา', 'ช่างสี', 'ช่างยนต์', 'ช่างไม้']
        const tagsItem = ['งานช่าง ระบบประปา ระบบไฟฟ้า และอื่นๆ', 'ช่างประปา', 'ช่างไฟฟ้า', 'ช่างยนต์']

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
                    <Text style={{fontSize:20,color:"#009ada",textAlign:"center",alignItems:"center"}}>เลือกหมวดหมู่อาชีพ</Text>
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
                    <TouchableOpacity style={styles.nextButton} onPress={()=>this.props.navigation.navigate('WorkTypeScreen')}>
                        <Text style={styles.nextButtonText}>ถัดไป</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
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

export default CareerTypeScreen
