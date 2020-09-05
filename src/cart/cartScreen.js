import React,{useState} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native'
import Modal from "react-native-modal";
import CheckBox from "@react-native-community/checkbox";


export default function CartScreen({navigation}) {
    const [open, setOpen] = useState(false);
    return(
        <View style={{display:"flex",flex:1,  backgroundColor:"white"}}>
            <SafeAreaView />
            <View style={{flex:1,display:"flex"}}>
                <View style={{flexDirection:"row",padding:20,alignItems:"center",      backgroundColor:"white",
                    shadowRadius: 2,
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowColor: '#000000',
                    elevation: 4,
                    shadowOpacity: 0.10,
                    zIndex:2}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require("../assets/images/back.png")} style={{width:20,height:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:"#009ada",marginLeft:20}}>ตระกร้า</Text>

                </View>
                <View style={{flex:1,display:"flex",paddingLeft:20,paddingRight:20}}>
                    <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <CheckBox
                        boxType='square'
                        disabled={false}

                        // value={this.state.checked}
                        // onValueChange={(check) => this.isChecked(c
                        onAnimationType="stroke"
                        offAnimationType="fade"
                        onCheckColor="#fff"
                        onTintColor="#00a9ef"
                        tintColor="#00a9ef"
                        onFillColor="#00a9ef"
                        animationDuration={.1}
                        style={{marginTop:20,marginLeft:20}}
                    />
                        <Text style={{marginTop:15,marginLeft:10,fontSize:18,color:"#009ada"}}>เลือกทั้งหมด</Text>
                    </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginRight:30,justifyContent:"center",marginTop:10}}>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:12,marginRight:5,color:'#a09e9f'}}>ลบ</Text>
                            <Image source={require("../assets/images/delete.png")} style={{width:15,height:15}} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxBacklog}>
                        <View style={styles.backlogHeader}>
                            <Text style={styles.headerText}>ผู้ให้บริการ : สมชาย ช่างซ่อม</Text>
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
                                    $400
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
                                <Text style={[styles.serviceBudgetText,{textDecorationLine: 'line-through'}]}>฿400</Text>
                            </View>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.boxDeadLine}>
                            <View style={styles.deadLine}>
                                <Text style={{fontSize:20,color:"#ff912d"}}>โปรดระบุที่อยู่....</Text>
                            </View>
                        </View>

                    </View>

                </View>

            </View>

            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={{height:60,backgroundColor:"#009ada",width:"80%",justifyContent:"center",alignItems:"center",borderRadius:40,marginBottom:30}}>
                    <Text style={{fontSize:25,color:"white",fontWeight:"bold"}} onPress={()=>navigation.navigate('BookDetailScreen')}>ดำเนินการต่อ</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
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
        color: '#ffa24b',
        fontSize:20
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
        fontWeight:"bold"
    },
    servicePriceText: {
        color: '#ffa24b',
        fontSize: 22
    },
    imageService: {
        width: 60,
        height: 60
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
        color: '#939393',
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
