import React from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from 'react-native-vector-icons/AntDesign'

export default function ServiceList({navigation}) {
    return(
        <View style={{flex:1,display:"flex"}}>
           <SafeAreaView style={{display:"flex",flex:1}}>
               <View style={{display:"flex",flexDirection:"column",flex:1}}>
                   <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
                       <Text style={{fontSize:30,marginLeft:20,marginTop:3,color:"#07a8ef"}}>สวัสดี! , คุณไมตรี</Text>
                       <View style={{display:"flex",flexDirection:"column",alignItems:"flex-end",flex:1}}>
                           <View style={{display:"flex",flexDirection:"row",flex:1}}>
                               <Icon style={{marginTop:10,marginLeft:10}} color={'#939393'} name={'shoppingcart'} size={30} />
                               <Icon style={{marginTop:10,marginLeft:10,marginRight:10}} color={'#939393'} name={'bells'} size={30} />
                           </View>
                       </View>
                   </View>
                   <View style={{display:"flex",flexDirection:"row"}}>
                       <View style={{flexDirection:"row",paddingLeft:20,marginTop:10,flex:1}}>
                           <TouchableOpacity onPress={()=>navigation.goBack()}>
                           <Image source={require("../assets/images/back.png")} style={{width:25,height:25,marginTop:5}} />
                           </TouchableOpacity>
                           <Text style={{fontSize:24,marginLeft:5,color:"#07a8ef"}}>ล้างแอร์</Text>
                       </View>
                       <View style={{marginRight:20,marginTop:15}}>
                           <Text style={{color:"#07a8ef",fontSize:16}}>ดูรายละเอียดบริการ</Text>
                       </View>
                   </View>

                   <TouchableOpacity onPress={()=>navigation.navigate('tabService')}>
                   <View style={[styles.commentContainer,{marginTop:-10}]}>
                       <View style={styles.commentItem}>
                           <View style={styles.commentHeader}>
                               <View style={styles.commentDetailContainerAll}>
                                   <View>
                                   <Image style={styles.imageComment} source={{
                                       uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                   }}
                                    style={{height:80,width:80,borderRadius:40}}
                                   />
                                   <View style={{backgroundColor:"#4adf33",width:15,height:15,borderRadius:7,position:"absolute",right:10,bottom:0}} />
                                   </View>

                                   <View style={{flexDirection:"column",width:"78%"}}>
                                   <View style={{flexDirection:"row",width:"100%"}}>
                                       <View style={{flex:1}}>
                                          <Text style={{paddingLeft:10,paddingTop:10,fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                       </View>
                                       <View style={{paddingRight: 5}}>
                                       <View style={{flexDirection:"row",paddingTop:10}}>
                                               <Icon color={"#FFD700"}  name={'star'} size={15} />
                                               <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                               <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                               <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                               <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                       </View>
                                           <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                                           <Text style={{fontSize:10}}>5.0(38 รีวิว)</Text>
                                               <AntIcon name={'right'} size={12} style={{marginTop:1}} />
                                           </View>
                                       </View>


                                   </View>
                                       <Text style={{paddingLeft:10,fontSize:12,width:170}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                                   </View>


                               </View>

                               {/*<Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>*/}
                           </View>
                       </View>
                   </View>
                   </TouchableOpacity>

                   <View style={[styles.commentContainer,{marginTop:-30}]}>
                       <View style={styles.commentItem}>
                           <View style={styles.commentHeader}>
                               <View style={styles.commentDetailContainerAll}>
                                   <View>
                                       <Image style={styles.imageComment} source={{
                                           uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                       }}
                                              style={{height:80,width:80,borderRadius:40}}
                                       />
                                       <View style={{backgroundColor:"#4adf33",width:15,height:15,borderRadius:7,position:"absolute",right:10,bottom:0}} />
                                   </View>

                                   <View style={{flexDirection:"column",width:"78%"}}>
                                       <View style={{flexDirection:"row",width:"100%"}}>
                                           <View style={{flex:1}}>
                                               <Text style={{paddingLeft:10,paddingTop:10,fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                           </View>
                                           <View style={{paddingRight: 5}}>
                                               <View style={{flexDirection:"row",paddingTop:10}}>
                                                   <Icon color={"#FFD700"}  name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                               </View>
                                               <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                                                   <Text style={{fontSize:10}}>5.0(38 รีวิว)</Text>
                                                   <AntIcon name={'right'} size={12} style={{marginTop:1}} />
                                               </View>
                                           </View>


                                       </View>
                                       <Text style={{paddingLeft:10,fontSize:12,width:170}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                                   </View>


                               </View>

                               {/*<Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>*/}
                           </View>
                       </View>
                   </View>

                   <View style={[styles.commentContainer,{marginTop:-30}]}>
                       <View style={styles.commentItem}>
                           <View style={styles.commentHeader}>
                               <View style={styles.commentDetailContainerAll}>
                                   <View>
                                       <Image style={styles.imageComment} source={{
                                           uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                                       }}
                                              style={{height:80,width:80,borderRadius:40}}
                                       />
                                       <View style={{backgroundColor:"#4adf33",width:15,height:15,borderRadius:7,position:"absolute",right:10,bottom:0}} />
                                   </View>

                                   <View style={{flexDirection:"column",width:"78%"}}>
                                       <View style={{flexDirection:"row",width:"100%"}}>
                                           <View style={{flex:1}}>
                                               <Text style={{paddingLeft:10,paddingTop:10,fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                           </View>
                                           <View style={{paddingRight: 5}}>
                                               <View style={{flexDirection:"row",paddingTop:10}}>
                                                   <Icon color={"#FFD700"}  name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                                   <Icon color={"#FFD700"} style={{paddingLeft:1}} name={'star'} size={15} />
                                               </View>
                                               <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                                                   <Text style={{fontSize:10}}>5.0(38 รีวิว)</Text>
                                                   <AntIcon name={'right'} size={12} style={{marginTop:1}} />
                                               </View>
                                           </View>


                                       </View>
                                       <Text style={{paddingLeft:10,fontSize:12,width:170}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                                   </View>


                               </View>

                               {/*<Text style={styles.commentLike}> <AntIcon name="like1" size={20} color="#00a9ef" /> ⋮</Text>*/}
                           </View>
                       </View>
                   </View>

                   {/*<View style={styles.suggestTextContainer}>*/}
                   {/*     */}
                   {/*    <Text style={styles.suggestText}> คุณอาจจะสนใจบริการนี้ </Text>*/}
                   {/*</View>*/}

                   <View style={{flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",width:"65%",marginTop:30,alignSelf:"center"}}>
                       <View style={{height:1,width:"35%",backgroundColor:"#14adf0"}} />
                       <Text style={{paddingLeft:10,paddingRight:10,fontWeight:"bold",fontSize:16,color:"#14adf0"}}>คุณอาจสนใจบริการนี้</Text>
                       <View style={{height:1,width:"35%",backgroundColor:"#14adf0"}} />
                   </View>



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
           </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9'
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
