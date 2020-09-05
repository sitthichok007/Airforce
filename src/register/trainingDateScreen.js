import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Calendar, CalendarList, Agenda, LocaleConfig, Arrow } from 'react-native-calendars';

LocaleConfig.locales['th'] = {
    monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤษจิกายน', 'ธันวาคม'],
    monthNamesShort: ['มค.', 'กพ.', 'มีค', 'เมย', 'พค', 'มิย', 'กค', 'สค', 'กย', 'ตค', 'พย', 'ธค'],
    dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    today: 'วันนี้'
};
LocaleConfig.defaultLocale = 'th';

export class TrainingDateScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.goBack}>
                        {/* <Icon name="left" size={30} color='#329ada' /> */}
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>ลงทะเบียนอบรม</Text>
                </View>
                <View style={styles.trainingDateContainer}>
                    <Text style={styles.headerText}>เลือกวันอบรม</Text>
                </View>
                <View style={styles.calendarContainer}>
                    <Calendar
                        renderHeader={(date) => {/*Return JSX*/ }}
                        monthFormat={'yyyy MM'}
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
                            textDayHeaderFontSize: 16
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={()=>this.props.navigation.navigate('registerSuccess')}>
                    <Text style={styles.confirmButtonText}>ยืนยัน</Text>
                </TouchableOpacity>
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
        zIndex: -9999
    },
    container: {
        flex: 1,
    },
    trainingDateContainer: {
        paddingLeft: 30,
        marginVertical: 20
    },
    headerText: {
        fontSize: 20,
        color: '#329ada',
    },
    confirmButton: {
        backgroundColor:'#329ada',
        marginHorizontal: 30,
        marginVertical: 100,
        borderRadius: 30
    },
    confirmButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        paddingVertical: 7
    }
})

export default TrainingDateScreen
