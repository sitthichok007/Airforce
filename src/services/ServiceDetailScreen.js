import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image,TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

export default function ServiceDetailScreen({navigation}){

        return (
            <SafeAreaView style={styles.container}>
                <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
                    <Text style={{fontSize:30,marginLeft:20,marginTop:3,color:"#07a8ef"}}>สวัสดี! , คุณไมตรี</Text>
                    <View style={{display:"flex",flexDirection:"column",alignItems:"flex-end",flex:1}}>
                        <View style={{display:"flex",flexDirection:"row",flex:1}}>
                            <AntIcon style={{marginTop:10,marginLeft:10}} color={'#939393'} name={'shoppingcart'} size={30} />
                            <AntIcon style={{marginTop:10,marginLeft:10,marginRight:10}} color={'#939393'} name={'bells'} size={30} />
                        </View>
                    </View>
                </View>
                <View style={{paddingLeft:20,paddingTop:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../assets/images/back.png')} style={{width:20,height:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,color:"#07a8ef",paddingLeft:10}}>รายละเอียดเพิ่มเติม</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.serviceDetailContainerAll}>
                        <View style={styles.serviceDetailContainer}>
                            <Image style={styles.serviceProfile} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg'
                            }} />
                            <View style={styles.profileDetailContainer}>
                                <View style={styles.profileName}>
                                    <Text style={styles.profileNameText}>
                                        สมชาย ช่างซ่อม
                                    </Text>
                                    <Text style={{ color: '#00a9ef', fontSize: 18, marginTop: 0 }}>แนะนำ</Text>
                                    <Text style={styles.suggestDetail} >
                                        ช่างมีประสบการณ์มานานกว่า 30 ปี ซ่อมได้ทุกอย่าง
                                    </Text>
                                    <View style={styles.serviceMedal}>
                                        <Ionicons name="ios-ribbon-sharp" size={20} color="#2ca0ff" />
                                        <Ionicons name="ios-ribbon-sharp" size={20} color="#873839" />
                                        <Ionicons name="ios-ribbon-sharp" size={20} color="#ffbb00" />
                                    </View>
                                    <View style={styles.serviceTags}>
                                        <View style={styles.serviceTagsItem}>
                                            <Text style={styles.serviceTagsText}>
                                                ช่างไฟฟ้า
                                            </Text>
                                        </View>
                                        <View style={styles.serviceTagsItem}>
                                            <Text style={styles.serviceTagsText}>
                                                ช่างยนต์
                                            </Text>
                                        </View>
                                        <View style={styles.serviceTagsItem}>
                                            <Text style={styles.serviceTagsText}>
                                                ซ่อมแซม - ทั้งหมด
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.priceContainer}>

                            <Text style={{ color: '#939393', fontSize: 30 }}>ราคาเริ่มต้น</Text>

                            <Text style={{ color: '#ffa24b', fontSize: 30 }}>500 บาท</Text>
                        </View>

                    </View>




                    <View style={styles.serviceContainer}>
                        <Text style={styles.serviceHeaderText}>
                            เลือกบริการ
                        </Text>

                        <View style={styles.serviceBloc}>
                            <View style={styles.serviceBlocItem}>
                                <Text style={styles.serviceBlocHeader}>
                                    แอร์ติดผนัง 9000 BTU
                                </Text>
                                <Text style={styles.serviceBlocDetail}>
                                    ราคาเริ่มต้น
                                </Text>
                                <Text style={styles.serviceBlocPrice}>
                                    $500 / เครื่อง
                                </Text>
                            </View>

                            <View style={styles.serviceBlocItem}>
                                <Text style={styles.serviceBlocHeader}>
                                    แอร์ติดผนัง 9000 BTU
                                </Text>
                                <Text style={styles.serviceBlocDetail}>
                                    ราคาเริ่มต้น
                                </Text>
                                <Text style={styles.serviceBlocPrice}>
                                    $500 / เครื่อง
                                </Text>
                            </View>

                            <View style={styles.serviceBlocItem}>
                                <Text style={styles.serviceBlocHeader}>
                                    แอร์ติดผนัง 9000 BTU
                                </Text>
                                <Text style={styles.serviceBlocDetail}>
                                    ราคาเริ่มต้น
                                </Text>
                                <Text style={styles.serviceBlocPrice}>
                                    $500 / เครื่อง
                                </Text>
                            </View>
                        </View>

                    </View>


                    <View style={styles.reviewContainer}>
                        <Text style={styles.reviewHeaderText}>
                            รีวิว
                        </Text>
                        <View style={styles.reviewDetail}>
                            <Text style={styles.reviewPoint}>
                                4.9
                            </Text>
                            <View style={styles.reviewStar}>
                                <Ionicons name="star" size={20} color="#ffbb00" />
                                <Ionicons name="star" size={20} color="#ffbb00" />
                                <Ionicons name="star" size={20} color="#ffbb00" />
                                <Ionicons name="star" size={20} color="#ffbb00" />
                                <Ionicons name="star" size={20} color="#ffbb00" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.suggestContainer}>

                        <View style={styles.suggestPoint}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#00a9ef', fontSize: 20 }}>
                                    102 ครั้ง
                                </Text>
                                <Text style={{ color: '#939393' }}>
                                    การให้บริการ
                                </Text>
                            </View>
                            <Text style={{ fontSize: 50, color: '#939393', fontWeight: '200' }}>|</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#00a9ef', fontSize: 20 }}>
                                    4.9
                                </Text>
                                <Text style={{ color: '#939393' }}>
                                    ให้คะแนน
                                </Text>
                            </View>
                            <Text style={{ fontSize: 50, color: '#939393', fontWeight: '200' }}>|</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#00a9ef', fontSize: 20 }}>
                                    99%
                                </Text>
                                <Text style={{ color: '#939393' }}>
                                    การตอบกลับแชท
                                </Text>
                            </View>
                        </View>

                        <View style={styles.commentContainer}>
                            <View style={styles.commentItem}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.commentDetailContainerAll}>
                                        <Image style={styles.imageComment} source={{
                                            uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                        }} />

                                        <View style={styles.commentDetailContainer}>
                                            <Text style={styles.commentNameText}>ไมตรี เมตตา</Text>
                                            <View style={styles.reviewStar}>
                                                <View style={styles.reviewStar}>
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                </View>
                                                <Text style={{ color: '#ffa24b' }}>
                                                    : ซ่อมท่อ
                                                </Text>
                                            </View>
                                            <Text style={{ color: '#939393', fontSize: 16, marginTop: 5 }}>ทำงานดีครับ</Text>
                                            <Text style={{ color: '#939393', fontSize: 14, marginTop: 5 }}>26/01/2563</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>
                                </View>
                            </View>
                            <View style={styles.commentItem}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.commentDetailContainerAll}>
                                        <Image style={styles.imageComment} source={{
                                            uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                        }} />

                                        <View style={styles.commentDetailContainer}>
                                            <Text style={styles.commentNameText}>ไมตรี เมตตา</Text>
                                            <View style={styles.reviewStar}>
                                                <View style={styles.reviewStar}>
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                </View>
                                                <Text style={{ color: '#ffa24b' }}>
                                                    : ซ่อมท่อ
                                                </Text>
                                            </View>
                                            <Text style={{ color: '#939393', fontSize: 16, marginTop: 5 }}>ทำงานดีครับ</Text>
                                            <Text style={{ color: '#939393', fontSize: 14, marginTop: 5 }}>26/01/2563</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>
                                </View>
                            </View>
                            <View style={styles.commentItem}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.commentDetailContainerAll}>
                                        <Image style={styles.imageComment} source={{
                                            uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                        }} />

                                        <View style={styles.commentDetailContainer}>
                                            <Text style={styles.commentNameText}>ไมตรี เมตตา</Text>
                                            <View style={styles.reviewStar}>
                                                <View style={styles.reviewStar}>
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                    <Ionicons name="star" size={15} color="#ffbb00" />
                                                </View>
                                                <Text style={{ color: '#ffa24b' }}>
                                                    : ซ่อมท่อ
                                                </Text>
                                            </View>
                                            <Text style={{ color: '#939393', fontSize: 16, marginTop: 5 }}>ทำงานดีครับ</Text>
                                            <Text style={{ color: '#939393', fontSize: 14, marginTop: 5 }}>26/01/2563</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.suggestTextContainer}>
                            <Text style={styles.suggestText}> คุณอาจจะสนใจบริการนี้ </Text>
                        </View>

                        <View style={styles.underLine} />

                        <View style={styles.suggestItemContainer}>
                            <View style={styles.suggestItem}>
                                <Image style={styles.imageSuggest} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.suggestItemText}>
                                    <Text style={{ color: '#000', fontSize: 18 }}>ท่อตัน</Text>
                                    <Text style={{ color: '#ffa24b', fontSize: 14 }}>เริ่มต้นที่ 2,500 บาท</Text>
                                </View>
                            </View>
                            <View style={styles.suggestItem}>
                                <Image style={styles.imageSuggest} source={{
                                    uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                }} />
                                <View style={styles.suggestItemText}>
                                    <Text style={{ color: '#000', fontSize: 18 }}>ท่อตัน</Text>
                                    <Text style={{ color: '#ffa24b', fontSize: 14 }}>เริ่มต้นที่ 2,500 บาท</Text>
                                </View>
                            </View>
                        </View>


                    </View>





                </ScrollView>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    scrollView: {

    },
    serviceDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    serviceDetailContainerAll: {
        padding: 20,
        marginTop: 40,
        marginVertical: 3,
        backgroundColor: "#fff",
        justifyContent: 'space-around'
    },
    serviceProfile: {
        width: 130,
        height: 130,
        borderRadius: 100
    },
    profileDetailContainer: {
        flex: .9
    },
    profileNameText: {
        color: '#00a9ef',
        fontSize: 26
    },
    suggestDetail: {
        color: '#939393'
    },
    serviceMedal: {
        marginTop: 5,
        flexDirection: 'row'
    },
    serviceTags: {
        flexDirection: 'row',
        marginTop: 5,
        flex: 1,
        flexWrap: 'wrap',
    },
    serviceTagsItem: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 3,
        backgroundColor: '#c2edff',
        borderRadius: 10
    },
    serviceTagsText: {
        color: '#0193cf'
    },
    priceContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    serviceContainer: {
        marginVertical: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    serviceHeaderText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 22,
        color: '#00a9ef',
        fontWeight: 'bold'
    },
    serviceBloc: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    serviceBlocItem: {
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 15,
        width: 100,
        height: 100,
        alignItems: 'center'
    },
    serviceBlocHeader: {
        paddingTop: 10,
        color: '#00a9ef'
    },
    serviceBlocDetail: {
        paddingTop: 10,
        color: '#939393',
    },
    serviceBlocPrice: {
        color: '#ffa24b'
    },
    reviewContainer: {
        marginVertical: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    reviewHeaderText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 22,
        color: '#00a9ef',
        fontWeight: 'bold'
    },
    reviewDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    reviewPoint: {
        fontSize: 22,
        color: '#00a9ef',
    },
    reviewStar: {
        flexDirection: 'row'
    },
    suggestContainer: {
        marginVertical: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    suggestPoint: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    commentContainer: {
        justifyContent: 'space-evenly',
        padding: 20,
    },
    commentDetailContainerAll: {
        flexDirection: 'row',
    },
    commentDetailContainer: {
        paddingLeft: 20
    },
    commentItem: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#939393',
        marginVertical: 5
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageComment: {
        width: 35,
        height: 35,
        borderRadius: 40
    },
    commentNameText: {
        color: '#939393',
        fontSize: 14
    },
    commentLike: {
    },
    suggestTextContainer: {
        alignItems: 'center',
        marginVertical: 30
    },
    suggestText: {
        color: '#00a9ef',
        fontSize: 16,

    },
    suggestItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30
    },
    suggestItem: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageSuggest: {
        width: 140,
        height: 140
    },
    suggestItemText: {
        padding: 5
    },
    underLine: {
        borderBottomColor: '#00a9ef',
        borderBottomWidth: 1,
        marginTop: 10
    }
})

