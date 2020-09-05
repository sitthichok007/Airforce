import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image,TouchableOpacity, ScrollView } from 'react-native'

export class BackLogScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้ให้บริการ : สมชาย ช่างซ่อม</Text>
                            <Text style={styles.headerText}>รอการตอบรับ ⋮ </Text>
                        </View>

                        <View style={styles.serviceInfo}>
                            <View style={styles.serviceName}>
                                <Image style={styles.imageService} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.serviceDetail}>
                                    <Text style={styles.serviceNameText}>ล้างแอร์</Text>
                                    <Text style={styles.serviceDetailText}>..</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.servicePriceText}>
                                    $500
                                </Text>
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
                                <Text style={styles.serviceBudgetText}>$400</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.boxDeadLine}>
                            <View style={styles.deadLine}>
                                <Text style={styles.deadLineText}>
                                    เริ่ม - สิ้นสุดการบริการ
                                </Text>
                                <Text style={styles.deadLineDateText}>
                                    ภายในวันที่ 7/2/63 เวลา 14.00น.
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.cancleButton}>
                                    <Text style={styles.cancleButtonText}>
                                        ยกเลิก
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
    cancleButton: {
        backgroundColor: '#ff4746',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
    cancleButtonText: {
        color: '#fff',
        fontSize: 16
    }
})

export default BackLogScreen
