import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'

export class SpecialHistoryScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>
                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้รับบริการ : พรพรรณ แสนสุข</Text>
                            <Text style={styles.headerText}> สำเร็จ! </Text>
                        </View>

                        <View style={styles.serviceInfo}>
                            <View style={styles.serviceName}>
                                <Image style={styles.imageService} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.serviceDetail}>
                                    <Text style={styles.serviceNameText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.serviceDetailText}>คุยเล่นกับเด็กได้ ไม่ขี้โมโห น้องชื่อต้น อายุ...</Text>
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
                                <Text style={styles.serviceBudgetText}>$500</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.reveviewContainer}>
                            <View style={styles.review}>
                                <Text style={styles.reviewText}></Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.givePointButton}>
                                    <Text style={styles.givePointButtonText}>
                                        ให้คะแนน
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.givePointButton}>
                                    <Text style={styles.givePointButtonText}>
                                        ดูคะแนน
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้รับบริการ : พรพรรณ แสนสุข</Text>
                            <Text style={styles.headerText}> สำเร็จ! </Text>
                        </View>

                        <View style={styles.serviceInfo}>
                            <View style={styles.serviceName}>
                                <Image style={styles.imageService} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.serviceDetail}>
                                    <Text style={styles.serviceNameText}>พี่เลี้ยงเด็ก</Text>
                                    <Text style={styles.serviceDetailText}>คุยเล่นกับเด็กได้ ไม่ขี้โมโห น้องชื่อต้น อายุ...</Text>
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
                                <Text style={styles.serviceBudgetText}>$500</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.reveviewContainer}>
                            <View style={styles.review}>
                                <Text style={styles.reviewText}>ไม่ได้รับคะแนน</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.givePointButton}>
                                    <Text style={styles.givePointButtonText}>
                                        ให้คะแนน
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.givePointButton}>
                                    <Text style={styles.givePointButtonText}>
                                        ดูคะแนน
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
        flex: 1,
        backgroundColor: '#fff',
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
        width: 200
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
        fontSize: 16,
        paddingTop: 5
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
        alignItems: 'center',
    },
    deadLineText: {
        fontSize: 12,
        color: '#939393',
    },
    deadLineDateText: {
        fontSize: 12,
        color: '#939393',
    },
    reveviewContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    review: {

    },
    reviewText: {
        alignItems: 'center',
        color: '#939393'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    givePointButton: {
        marginLeft: 10,
        backgroundColor: '#c2edff',
        alignSelf: 'flex-start',
        borderRadius: 7
    },
    givePointButtonText: {
        color: '#2f93cf',
        paddingHorizontal: 7,
        paddingVertical: 7
    }
})

export default SpecialHistoryScreen
