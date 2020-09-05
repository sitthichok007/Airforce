import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet,Image,TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export class SpecialWorkListScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>งานของคุณ</Text>
                </View>

                <View style={styles.boxBacklog}>
                    <View style={styles.backlogHeader}>
                        <Text style={styles.headerText}>ผู้รับบริการ : พรพรรณ แสนสุข</Text>
                        <Text style={styles.headerText}> ⋮ </Text>
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

                    <View style={styles.boxDeadLine}>
                        <View style={styles.deadLine}>
                            <Text style={styles.deadLineText}>
                                เริ่ม - สิ้นสุดการบริการ
                            </Text>
                            <Text style={styles.deadLineDateText}>
                                ภายในวันที่ 20/02/63 เวลา 10.00 - 15.00น.
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancleButton}>
                                <Text style={styles.cancleButtonText}>
                                    ยกเลิก
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} >
                                <Text style={styles.confirmButtonText}>
                                    ปฏิบัติงาน
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

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
        paddingTop:5
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
        width: 180
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
        marginLeft: 5,
        backgroundColor: '#ff4746',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    cancleButtonText: {
        color: '#fff',
        fontSize: 16
    },
    confirmButton: {
        marginLeft: 5,
        backgroundColor: '#c2edff',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    confirmButtonText: {
        color: '#339ed5',
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default SpecialWorkListScreen
