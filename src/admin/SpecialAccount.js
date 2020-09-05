import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image, Switch,ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'



export class SpecialAccountScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isEnabled: false
        }
    }

    toggleSwitch = () => {
        this.setState({
            isEnabled: !this.state.isEnabled
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>บัญชีของฉัน</Text>
                </View>

                <ScrollView>
                    <View style={styles.accountListContainer}>

                        <View style={styles.ListItem}>
                            <Image style={styles.imageList} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />

                            <View style={styles.listDetailContainer}>
                                <Text style={styles.headerText}>สมชาย ช่างซ่อม</Text>
                                <View style={styles.secondContainer}>
                                    <Text style={styles.secondText}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง <EvilIcons name="pencil" color="#939393" size={20} /></Text>
                                </View>
                                <View style={styles.serviceMedal}>
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#2ca0ff" />
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#873839" />
                                    <Ionicons name="ios-ribbon-sharp" size={20} color="#ffbb00" />
                                </View>
                                <View style={styles.tagsContainer}>

                                    <View style={styles.tagsItem}>
                                        <Text style={styles.tagsItemText}>ช่างประปา</Text>
                                    </View>

                                    <View style={styles.tagsItem}>
                                        <Text style={styles.tagsItemText}>ช่างไฟฟ้า</Text>
                                    </View>

                                    <View style={styles.tagsItem}>
                                        <Text style={styles.tagsItemText}>ช่างยนต์</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.menuListItem}>
                            <EvilIcons name="pencil" color="#939393" size={40} />
                            <Text style={styles.menuListText}>แก้ไขโปรไฟล์</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem}>

                            <EvilIcons name="user" color="#939393" size={40} />
                            <Text style={styles.menuListText}>เปิดสถานะรับงาน</Text>

                            <View style={styles.toggleContainer}>
                                <Switch
                                    style={styles.toggleSwitch}
                                    trackColor={{ false: "#fff", true: "#8ac24b" }}
                                    thumbColor={this.state.isEnabled ? "#fff" : "#fff"}
                                    ios_backgroundColor="#fff"
                                    onValueChange={this.toggleSwitch}
                                    value={this.state.isEnabled}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem} onPress={()=>this.props.navigation.navigate('specialEditWork')}>
                            <EvilIcons name="tag" color="#939393" size={40} />
                            <Text style={styles.menuListText}>ตำแหน่งงาน</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem}>
                            <EvilIcons name="location" color="#939393" size={40} />
                            <Text style={styles.menuListText}>พื้นที่ให้บริการ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem}>
                            <EvilIcons name="clock" color="#939393" size={40} />
                            <Text style={styles.menuListText}>วันเวลาให้บริการ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem}>
                            <EvilIcons name="star" color="#939393" size={40} />
                            <Text style={styles.menuListText}>คะแนนรีวิว</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuListItem}>
                            <EvilIcons name="question" color="#939393" size={40} />
                            <Text style={styles.menuListText}>ช่วยเหลือ</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
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
    accountListContainer: {
        paddingHorizontal: 30,
    },
    ListItem: {
        paddingVertical: 15,

        borderBottomColor: '#b3e0f9',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageList: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    listDetailContainer: {
        width: 240
    },
    headerText: {
        fontSize: 20,
        color: '#11aef0'
    },
    secondText: {
        paddingTop: 7,
        color: '#939393',
        fontSize: 12
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 230
    },
    serviceMedal: {
        flexDirection: 'row',
        paddingTop: 7
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 7
    },
    tagsItem: {
        backgroundColor: '#c2edff',
        alignSelf: 'flex-start',
        borderRadius: 7,
        marginRight: 5,
        marginBottom: 5
    },
    tagsItemText: {
        color: '#179bd3',
        textAlign: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    menuListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#b3e0f9',
        borderBottomWidth: 1
    },
    menuListText: {
        paddingVertical: 20,
        fontSize: 16,
        paddingLeft: 10,
    },
    logoutButton: {
        backgroundColor: '#00a9ef',
        marginVertical: 30,
        borderRadius: 30
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 20,
        paddingVertical: 7,
        textAlign: 'center'
    },
    toggleContainer: {
    },
    toggleSwitch: {
        marginLeft: 140
    }
})

export default SpecialAccountScreen
