import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, Dimensions,ScrollView } from 'react-native'
import Modal from 'react-native-modal';

import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { Calendar, CalendarList, Agenda, LocaleConfig, Arrow } from 'react-native-calendars';

LocaleConfig.locales['th'] = {
    monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤษจิกายน', 'ธันวาคม'],
    monthNamesShort: ['มค.', 'กพ.', 'มีค', 'เมย', 'พค', 'มิย', 'กค', 'สค', 'กย', 'ตค', 'พย', 'ธค'],
    dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    today: 'วันนี้'
};
LocaleConfig.defaultLocale = 'th';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height



export class BookDetailScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            calendar: false
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isModalVisible: !prevState.isModalVisible
        }));
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="left" size={30} color='#329ada' />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>รายละเอียดการจอง</Text>
                </View>


                <ScrollView>

                    <Text style={styles.pageText}>บริการล้างแอร์</Text>

                    <View style={styles.ListItem}>
                        <Image style={styles.imageList} source={{
                            uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                        }} />

                        <View style={styles.listDetailContainer}>
                            <Text style={styles.headerText}>สมชาย ช่างซ่อม</Text>
                            <Text style={styles.suggestText}>แนะนำ</Text>
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
                                    <Text style={styles.tagsItemText}>ช่างยนต์</Text>
                                </View>

                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ช่างไฟฟ้า</Text>
                                </View>

                                <View style={styles.tagsItem}>
                                    <Text style={styles.tagsItemText}>ซ่อมแซมทั้งหมด</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.serviceDetailText}>แอร์ติดผนัง 9,000 BTU</Text>

                    <Text style={styles.headerTextAreaText}>คุณต้องการใช้บริการที่ไหน</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('myaddress')}>
                    <TextInput
                        style={styles.textArea}
                        editable={false}
                        multiline
                        numberOfLines={4}
                        pointerEvents="none"
                    />
                    </TouchableOpacity>

                    <Text style={styles.headerTextAreaText}>คุณต้องการใช้บริการนี้เมื่อไหร่</Text>
                    <View style={{}}>

                        <View style={styles.selectDateContainer}>
                            <TouchableOpacity style={styles.dateButton} onPress={() => this.setState({ calendar: true })}>
                                <Text style={styles.dateButtonText}>1 ก.ค. 2020</Text>
                                <Icon name='calendar' color='#939393' size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeButton}>
                                <Text style={styles.timeButtonText}>14 : 20</Text>
                                <Icon name='clockcircleo' color='#939393' size={25} />
                            </TouchableOpacity>
                        </View>

                        {
                            this.state.calendar ?
                                <View style={styles.calendarContainer}>
                                    <Calendar
                                        style={styles.calendar}
                                        renderHeader={(date) => {/*Return JSX*/ }}
                                        monthFormat={'yyyy MM'}
                                        onDayPress={() => this.setState({ calendar: false })}
                                        theme={{
                                            backgroundColor: '#ffffff',
                                            calendarBackground: '#ffffff',
                                            textSectionTitleColor: '#b6c1cd',
                                            textSectionTitleDisabledColor: '#d9e1e8',
                                            selectedDayBackgroundColor: '#00adf5',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: '#00adf5',
                                            dayTextColor: '#2d4150',
                                            textDisabledColor: '#d9e1e8',
                                            dotColor: '#00adf5',
                                            selectedDotColor: '#ffffff',
                                            arrowColor: 'orange',
                                            disabledArrowColor: '#d9e1e8',
                                            monthTextColor: 'blue',
                                            indicatorColor: 'blue',
                                            textDayFontWeight: '300',
                                            textMonthFontWeight: 'bold',
                                            textDayHeaderFontWeight: '300',
                                            textDayFontSize: 16,
                                            textMonthFontSize: 16,
                                            textDayHeaderFontSize: 16,
                                            'stylesheet.day.basic': {
                                                'base': {
                                                    width: 30,
                                                    height: 30
                                                }
                                            }
                                        }}
                                    />
                                </View> : null

                        }

                    </View>
                    <View style={{ zIndex: -1 }}>
                        <Text style={styles.headerTextAreaText}>รายละเอียดเพิ่มเติม</Text>
                        <TextInput
                            style={styles.textArea}
                            editable
                            multiline
                            numberOfLines={4}
                        />

                        <Text style={styles.headerTextAreaText}>แนบรูปภาพ</Text>
                        <TouchableOpacity style={styles.selectImage}>
                            <Icon name='plus' color='#03b3fd' size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.confirmButton} onPress={this.toggleModal}>
                            <Text style={styles.confirmButtonText}>ยืนยันการจอง</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.toggleModal()}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={styles.modal}>
                        <Icon name='checkcircle' color='#00a9ef' size={100} />
                        <Text style={styles.headerModalText}>
                            THANK YOU
                        </Text>
                        <Text style={styles.secondModalText}>ทำรายการสำเร็จแล้ว</Text>
                        <Text style={styles.detailModalText}>โปรดรอการตอบรับจากผู้บริการ</Text>

                    </View>
                </Modal>

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
        flex: 1
    },
    pageText: {
        fontSize: 20,
        paddingHorizontal: 30,
        color: '#00a9ef',
        marginVertical: 20,
        fontWeight: 'bold'
    },
    ListItem: {
        paddingHorizontal: 30,
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
        fontSize: 24,
        color: '#11aef0'
    },
    suggestText: {
        fontSize: 14,
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
        paddingTop: 7,
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
    serviceDetailText: {
        paddingHorizontal: 30,
        fontSize: 24,
        color: '#00a9ef',
        marginVertical: 10
    },
    headerTextAreaText: {
        paddingHorizontal: 30,
        fontSize: 20,
        color: '#00a9ef',
        marginVertical: 10
    },
    textArea: {
        borderColor: '#939393',
        borderWidth: 1,
        borderRadius: 10,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10
    },
    selectDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginBottom: 30
    },
    dateButton: {
        width: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#f4f4f4',
        borderRadius: 1,
        borderWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .2,
        shadowRadius: 5,

        elevation: 15,
    },
    dateButtonText: {
        color: '#939393',
        fontSize: 16
    },
    timeButton: {
        width: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#f4f4f4',
        borderRadius: 1,
        borderWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .2,
        shadowRadius: 5,

        elevation: 15,
    },
    timeButtonText: {
        color: '#939393',
        fontSize: 16
    },
    selectImage: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#939393',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        alignSelf: 'flex-start',
        width: 100,
        height: 100
    },
    confirmButton: {
        backgroundColor: '#03b3fd',
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 30
    },
    confirmButtonText: {
        fontSize: 20,
        paddingVertical: 7,
        textAlign: 'center',
        color: '#fff'
    },
    modal: {
        backgroundColor: '#fff',
        margin: 20,
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerModalText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00a9ef',
        textAlign: 'center',
        marginTop: 30
    },
    secondModalText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5c5c',
        textAlign: 'center'
    },
    detailModalText: {
        fontSize: 16,
        color: '#939393',
        textAlign: 'center'
    },
    calendarContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginHorizontal: 30,
        zIndex: 9999,
        marginTop: 60,
        width: deviceWidth - 60
    },
    calendar: {
        height: 100
    }
})

export default BookDetailScreen
