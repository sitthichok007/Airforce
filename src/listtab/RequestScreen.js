import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';
import FeatherIcons from 'react-native-vector-icons/Feather'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height

export class RequestScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            checked: false
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isModalVisible: !prevState.isModalVisible
        }));
    }

    isChecked = (value) => {
        console.log(value)
    }

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
                                <TouchableOpacity style={styles.cancleButton} onPress={this.toggleModal}>
                                    <Text style={styles.cancleButtonText}>
                                        ยกเลิก
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <Modal
                        isVisible={this.state.isModalVisible}
                        onBackdropPress={() => this.toggleModal()}
                        deviceWidth={deviceWidth}
                        deviceHeight={deviceHeight}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.modalHeader}>สาเหตุในการปฏิเสธงาน</Text>
                            <View style={styles.modalItem}>

                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.checked}
                                        onValueChange={(value) => this.isChecked(value)}
                                        onAnimationType="stroke"
                                        offAnimationType="fade"
                                        onFillColor="#00a9ef"
                                        onCheckColor="#00a9ef"
                                        onTintColor="#00a9ef"
                                        tintColor="#00a9ef"
                                        animationDuration={.1}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 10 }}> ได้ผู้จ้างรายใหม่</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.checked}
                                        onValueChange={(value) => this.isChecked(value)}
                                        onAnimationType="stroke"
                                        offAnimationType="fade"
                                        onCheckColor="#00a9ef"
                                        onTintColor="#00a9ef"
                                        tintColor="#00a9ef"
                                        onFillColor="#00a9ef"
                                        animationDuration={.1}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 10 }}> ไม่สะดวก</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.checked}
                                        onValueChange={(value) => this.isChecked(value)}
                                        onAnimationType="stroke"
                                        offAnimationType="fade"
                                        onCheckColor="#00a9ef"
                                        onTintColor="#00a9ef"
                                        tintColor="#00a9ef"
                                        onFillColor="#00a9ef"
                                        animationDuration={.1}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 10 }}> ติดต่อผู้ว่าจ้างไม่ได้</Text>
                                </View>

                            </View>
                            <TouchableOpacity style={styles.cancleConfirmButton} onPress={this.toggleModal}>
                                <Text style={styles.cancleConfirmButtonText}>
                                    ยืนยันการยกเลิก
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </ScrollView>
            </SafeAreaView >
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
        borderRadius: 10,
        alignItems: 'center'
    },
    cancleButtonText: {
        color: '#fff',
        fontSize: 16
    },
    modal: {
        backgroundColor: '#fff',
        margin: 20,
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 30,
        borderRadius: 15
    },
    modalHeader: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    modalItem: {
        paddingTop: 20,
        paddingBottom: 20
    },
    modalItemText: {
        fontSize: 18
    },
    cancleConfirmButton: {
        marginTop: 70,
        backgroundColor: '#ff4746',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    cancleConfirmButtonText: {
        color: '#fff',
        fontSize: 16
    },
})

export default RequestScreen
