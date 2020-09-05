import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


export class NotificationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#329ada' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>การแจ้งเตือน</Text>
                </View>

                <ScrollView>
                    <View style={styles.notificationContainer}>

                        <TouchableOpacity style={styles.notificationItem}>
                            <Image style={styles.notificationImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.notificationDetail}>
                                <View style={styles.headerTextContainer}>
                                    <Text style={styles.headerText}>บริการของคุณสำเร็จแล้ว</Text>
                                    <View style={styles.point}>
                                        <Text style={styles.pointText}>1</Text>
                                    </View>
                                </View>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.notificationItem} onPress={()=>this.props.navigation.navigate('location')}>
                            <Image style={styles.notificationImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.notificationDetail}>
                                <View style={styles.headerTextContainer}>
                                    <Text style={styles.headerText}>ผู้ให้บริการกำลังเดินทางมาหาคุณ</Text>
                                </View>
                                <Text style={styles.secondText}>โปรดเตรียมตัวให้พร้อม ช่างกำลังจะมาถึง</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.notificationItem}>
                            <Image style={styles.notificationImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.notificationDetail}>
                                <View style={styles.headerTextContainer}>
                                    <Text style={styles.headerText}>1 วันก่อนเริ่มงาน</Text>
                                </View>
                                <Text style={styles.secondText}>โปรดเตรียมตัวให้พร้อม ช่างจะเข้าไปในเวลาที่กำหนด</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.notificationItem}>
                            <Image style={styles.notificationImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.notificationDetail}>
                                <View style={styles.headerTextContainer}>
                                    <Text style={styles.preHeaderText}>สมชาย ช่างซ่อม</Text>
                                    <Text style={styles.headerText}>ตอบรับงานแล้ว</Text>
                                </View>
                                <Text style={styles.secondText}>โปรดอ่านรายละเอียด</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
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
        paddingLeft: 10
    },
    navigationText: {
        fontSize: 22,
        color: '#329ada',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        paddingLeft: 10,
        zIndex: -9999,

    },
    container: {
        flex: 1,
    },
    notificationItem: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#c2edff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 30
    },
    notificationImage: {
        width: 50,
        height: 50
    },
    notificationDetail: {
        width: 300,
        paddingLeft: 70
    },
    headerText: {
        color: '#00a9ef',
        fontSize: 16
    },
    preHeaderText: {
        color: '#00a9ef',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    secondText: {
        marginTop: 3,
        color: '#000',
        fontSize: 12,
        flexWrap: 'wrap'
    },
    dateContainer: {
        height: '100%',
        marginTop: -35,
        paddingLeft: 20
    },
    dateText: {
        fontSize: 10,
        color: '#939393'
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    point: {
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: '#f66d6d',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:15,
        height: 15
    },
    pointText: {
        color:'#fff',
        fontSize: 10
    }
})



export default NotificationScreen
