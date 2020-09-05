import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'


export class WorkCalendarScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>ปฏิทินงาน</Text>
                </View>

                <ScrollView>
                    <View style={styles.calendarContainer}>
                        <View style={styles.headerMonth}>
                            <Text style={styles.monthText1}>มิถุนายน</Text>
                            <Text style={styles.monthText2}>|</Text>
                            <Text style={styles.monthText3}>2563</Text>
                        </View>

                        <View style={styles.calendarEventContainer}>
                            <View style={styles.dayContainer}>
                                <Text style={styles.nameDayText}>จันทร์</Text>
                                <Text style={styles.dateText}>25</Text>
                            </View>

                            <View style={styles.eventContainer}>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItemActive}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.calendarEventContainer}>
                            <View style={styles.dayContainer}>
                                <Text style={styles.nameDayText}>อังคาร</Text>
                                <Text style={styles.dateText}>26</Text>
                            </View>

                            <View style={styles.eventContainer}>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={styles.calendarContainer}>
                        <View style={styles.headerMonth}>
                            <Text style={styles.monthText1}>พฤษภาคม</Text>
                            <Text style={styles.monthText2}>|</Text>
                            <Text style={styles.monthText3}>2563</Text>
                        </View>

                        <View style={styles.calendarEventContainer}>
                            <View style={styles.dayContainer}>
                                <Text style={styles.nameDayText}>จันทร์</Text>
                                <Text style={styles.dateText}>25</Text>
                            </View>

                            <View style={styles.eventContainer}>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={styles.calendarContainer}>
                        <View style={styles.headerMonth}>
                            <Text style={styles.monthText1}>กรกฎาคม</Text>
                            <Text style={styles.monthText2}>|</Text>
                            <Text style={styles.monthText3}>2563</Text>
                        </View>

                        <View style={styles.calendarEventContainer}>
                            <View style={styles.dayContainer}>
                                <Text style={styles.nameDayText}>จันทร์</Text>
                                <Text style={styles.dateText}>25</Text>
                            </View>

                            <View style={styles.eventContainer}>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                                <View style={styles.eventItem}>
                                    <Text style={styles.headerText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.secondText}>เริ่ม - สิ้นสุดการบริการ</Text>
                                    <Text style={styles.secondText}>ภายในวันที่ 20/02/63 เวลา 10:00 - 15.00น.</Text>
                                </View>

                            </View>
                        </View>

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
    calendarContainer: {

    },
    headerMonth: {
        backgroundColor: '#c4c4c4',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 3,
        alignItems: 'center',
    },
    monthText1: {
        fontSize: 20,
        color: '#fff',

        alignItems: 'center',
        fontWeight: 'bold'
    },
    monthText2: {
        fontSize: 30,
        color: '#fff',
        alignItems: 'center',
    },
    monthText3: {
        fontSize: 20,
        color: '#fff',
        paddingTop: 3,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    calendarEventContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },
    dayContainer: {
        paddingTop: 10
    },
    nameDayText: {
        color: '#00a9ef',
        fontWeight: 'bold',
        fontSize: 20
    },
    dateText: {
        color: '#00a9ef',
        fontWeight: 'bold',
        fontSize: 20
    },
    eventContainer: {
        padding: 10
    },
    eventItem: {
        backgroundColor: '#ff8c23',
        borderRadius: 100,
        paddingLeft: 40,
        paddingRight: 60,
        // paddingHorizontal: 60,
        paddingVertical: 7,
        marginVertical: 5
    },
    eventItemActive: {
        backgroundColor: '#00a9ef',
        borderRadius: 100,
        paddingLeft: 40,
        paddingRight: 60,
        // paddingHorizontal: 60,
        paddingVertical: 7,
        marginVertical: 5
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    secondText: {
        fontSize: 10,
        color: '#fff'
    }

})

export default WorkCalendarScreen
