import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image,ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export class SpecialNotificationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>แจ้งเตือน</Text>
                </View>

                <ScrollView>
                    <View style={styles.notificationContainer}>

                        <TouchableOpacity style={styles.notificationItem}>
                            <Image style={styles.notificationImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.notificationDetail}>
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
                                <Text style={styles.headerText}>ผู้รับบริการให้คะแนนคุณ</Text>
                                <Text style={styles.secondText}>ไมตรีเมตตาได้ให้คะแนนคุณ จากการใช้บริการซ่อมท่อ เข้าดูคะแนนของคุณได้เลย</Text>
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
    notificationItem: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#38a9ef',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    notificationImage: {
        width: 50,
        height: 50
    },
    notificationDetail: {
        width: 300,
        paddingLeft: 40
    },
    headerText: {
        color: '#37a7ed',
        fontWeight: 'bold',
        fontSize: 16
    },
    secondText: {
        marginTop: 3,
        color: '#000',
        fontSize: 12,
        flexWrap: 'wrap'
    },
    dateContainer: {
        height: '100%'
    },
    dateText: {
        fontSize: 10,
        color: '#939393'
    }

})

export default SpecialNotificationScreen
