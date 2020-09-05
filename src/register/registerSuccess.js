import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView,TouchableOpacity,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export class RegisterSuccessScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <Text style={styles.headerText}>ลงทะเบียนอบรมเรียบร้อยแล้ว</Text>
                <Text style={styles.headerIcon}>
                    <Icon name="ios-document-attach-sharp" color="#3399d9" size={150} />
                </Text>
                <Text style={styles.secondText}>วันอบรม : 7 กุมภาพันธ์ 2563</Text>

                <View style={styles.underLine} />

                <Text style={styles.secondDetailText}>เอกสารที่ต้องนำมาในวันที่อบรมดังนี้</Text>
                <Text style={styles.detailText}>- สำเนาทะเบียนบ้าน 2 ชุด</Text>
                <Text style={styles.detailText}>- สำเนาบัตรประชาชน 2 ชุด</Text>
                <Text style={styles.detailText}>- หนังสือสัญญา 1 ชุด</Text>
                <Text style={styles.detailText}>- หนังสือตรวจประวัติ 1 ชุด</Text>
                <Text style={styles.detailText}>พร้อมเซ็นต์รับรองเอกสารทุกแผ่นด้วยปากกาน้ำเงิน</Text>

                <TouchableOpacity style={styles.confirmButton} onPress={()=>this.props.navigation.replace('specialScreen')}>
                    <Text style={styles.confirmButtonText}>ตกลง</Text>
                </TouchableOpacity>
                </ScrollView>


            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
    },
    headerText: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 25,
        color: '#329ada'
    },
    headerIcon: {
        textAlign: 'center',
        marginVertical: 20
    },
    secondText:{
        fontSize: 20,
        color: '#329ada',
        textAlign: 'center'
    },
    underLine: {
        borderBottomColor: '#329ada',
        borderBottomWidth: 1,
        marginHorizontal: 30,
        marginVertical: 20,
    },
    secondDetailText:{
        fontSize: 20,
        color: '#329ada',
        paddingHorizontal: 30
    },
    detailText: {
        paddingHorizontal: 30,
        fontSize: 16,
        color: '#939393',
        paddingVertical: 5
    },
    confirmButton: {
        backgroundColor:'#329ada',
        marginHorizontal: 30,
        marginVertical: 40,
        borderRadius: 30
    },
    confirmButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        paddingVertical: 7
    }
})

export default RegisterSuccessScreen
