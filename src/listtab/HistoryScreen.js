import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image,TouchableOpacity, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export class HistoryScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้ให้บริการ : สมชาย ช่างซ่อม</Text>
                            <Ionicons name="heart" size={20} color="#c1191a" />
                        </View>

                        <View style={styles.serviceInfo}>
                            <View style={styles.serviceName}>
                                <Image style={styles.imageService} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.serviceDetail}>
                                    <Text style={styles.serviceNameText}>แม่บ้าน</Text>
                                    <Text style={styles.serviceDetailText}>น้ำหก</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.serviceTotal}>
                            <Text style={styles.serviceTotalInfoText1}>
                                1 บริการ
                            </Text>
                            <View style={styles.serviceTotalInfo}>
                                <Text style={styles.serviceTotalInfoText2}>
                                    งบประมาณการจ้าง
                                </Text>
                                <Text style={styles.serviceBudgetText}>$500</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.boxDeadLine}>
                            <View style={styles.deadLine}>
                                <Text style={styles.deadLineText}>
                                    การให้บริการเสร็จสิ้นแล้ว
                                </Text>
                                <Text style={styles.deadLineDateText}>
                                    โปรดให้คะแนนความพึงพอใจต่อผู้ให้บริการ
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.confirmButton}>
                                    <Text style={styles.confirmButtonText}>
                                        ให้คะแนน
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้ให้บริการ : สมชาย ช่างซ่อม</Text>
                            <Ionicons name="heart-outline" size={20} color="#c1191a" />
                        </View>

                        <View style={styles.serviceInfo}>
                            <View style={styles.serviceName}>
                                <Image style={styles.imageService} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.serviceDetail}>
                                    <Text style={styles.serviceNameText}>ซ่อมท่อประปา</Text>
                                    <Text style={styles.serviceDetailText}>ซ่อมท่อประปา</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.serviceTotal}>
                            <Text style={styles.serviceTotalInfoText1}>
                                1 บริการ
                            </Text>
                            <View style={styles.serviceTotalInfo}>
                                <Text style={styles.serviceTotalInfoText2}>
                                    งบประมาณการจ้าง
                                </Text>
                                <Text style={styles.serviceBudgetText}>$500</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.boxDeadLine}>
                            <View style={styles.deadLine}>
                                <Text style={styles.deadLineText}>

                                </Text>
                                <Text style={styles.deadLineDateText}>
                                    ขอบคุณที่ใช้บริการ
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.confirmButton}>
                                    <Text style={styles.confirmButtonText}>
                                        ทำรายการอีกครั้ง
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        backgroundColor: "#fff"
    },
    boxBacklog: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#939393',
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10
    },
    backlogHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#ffa24b'
    },
    serviceInfo: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    serviceName: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    serviceDetail: {
        marginLeft: 15,
    },
    serviceDetailText: {
        fontSize: 14,
        color: '#939393'
    },
    serviceNameText: {
        fontSize: 20,
        color: '#00a9ef',
    },
    servicePriceText: {
        color: '#939393',
        fontSize: 22,
        textDecorationLine: 'line-through'
    },
    imageService: {
        width: 50,
        height: 50
    },
    serviceTotal: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    serviceTotalInfo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    serviceTotalInfoText1: {
        color: '#939393',
        marginBottom: 3
    },
    serviceTotalInfoText2: {
        color: '#939393',
        marginRight: 5,
        marginBottom: 3
    },
    serviceBudgetText: {
        color: '#ffa24b',
        fontSize: 22,
    },
    underLine: {
        borderBottomColor: '#939393',
        borderBottomWidth: 1,
        marginTop: 5
    },
    deadLine: {
        marginTop: 5
    },
    boxDeadLine: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    deadLineText: {
        fontSize: 12,
        color: '#939393',
    },
    deadLineDateText: {
        fontSize: 12,
        color: '#939393',
    },
    confirmButton: {
        backgroundColor: '#c2edff',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
    confirmButtonText: {
        color: '#0193cf',
        fontSize: 16
    }
})

export default HistoryScreen
