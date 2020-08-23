import React,{useState} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";

import {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

export default function ResearchSearch() {
    const [open,setOpen] = useState(false)
    return(
        <View style={{display:"flex",flex:1,backgroundColor:"white"}}>
            <SafeAreaView style={{display:"flex",flex:1}}>
                <View style={{flexDirection:"row",alignItems:"center",paddingLeft:30,paddingTop:10,paddingBottom:20,
                    backgroundColor:"white",
                    shadowRadius: 2,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowColor: '#000000',
                    elevation: 4,
                    shadowOpacity: 0.10,
                    zIndex:2
                }}>
                    <TouchableOpacity>
                        <Image source={require("../assets/images/back.png")} style={{width:25,height:25,marginLeft:"auto"}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:"#009ada",marginLeft:"auto",marginRight:"auto",left:0,right:0,position:"absolute",textAlign:"center"}}>ผลการค้นหา</Text>
                </View>
                <View style={{backgroundColor:"#eaeaea",width:"100%",justifyContent:'center',alignItems:"center",display:"flex",padding:15}}>
                    <TouchableOpacity onPress={()=>setOpen(true)}>
                    <View style={{backgroundColor:"#f8f8f8",display:"flex",flexDirection:"row",padding:5,width:"80%",justifyContent:"center",borderRadius:10}}>
                         <Image source={require("../assets/images/sort.png")} style={{width:20,height:20}} />
                        <Text style={{color:"#27b2f0",fontSize:15,marginRight:5,marginLeft:20}}>เรียงตาม</Text>
                        <Text style={{color:"#27b2f0",fontSize:15}}>:</Text>
                        <Text style={{color:"#27b2f0",fontSize:15,marginLeft:10}}>คะแนนความนิยม</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{display:"flex",flex:1,alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                    <View style={{
                        width:"42%",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,

                        elevation: 8
                        ,marginTop:10,
                        backgroundColor:"white",
                        borderRadius:10
                    }}>
                        <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                        <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                            <Text>ดวงกมล</Text>
                            <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                        </View>
                        <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                            <Text>เริ่มต้น</Text>
                            <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                        </View>
                        <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                            <View style={{flexDirection:"row"}}>
                                <Icon color={"#FFD700"}  name={'star'} size={15} />
                                <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                            </View>

                            <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                        </View>
                    </View>
                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10,
                            marginLeft:15
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10,
                            marginLeft:15
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10,
                            marginLeft:15
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                        <View style={{
                            width:"42%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8
                            ,marginTop:10,
                            backgroundColor:"white",
                            borderRadius:10,
                            marginLeft:15
                        }}>
                            <Image source={require("../assets/images/maid.jpg")} style={{height:120,width:"100%",borderRadius:10}} />
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>ดวงกมล</Text>
                                <Text style={{marginLeft:10}}>แม่บ้าน</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:5}}>
                                <Text>เริ่มต้น</Text>
                                <Text style={{marginLeft:10,color:"#ff9029"}}>฿ 700</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:5}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon color={"#FFD700"}  name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                    <Icon color={"#FFD700"} style={{paddingLeft:3}} name={'star'} size={15} />
                                </View>

                                <Text style={{fontSize:widthPercentageToDP('2.4%'),color:"#afafaf",marginLeft:5,paddingRight:5,marginTop:2}}>5.0 (9.1) รีวิว</Text>
                            </View>
                        </View>

                    </View>

                    <Modal isVisible={open}
                     style={{justifyContent:"center",alignItems:"center"}}
                    >
                        <View style={{ height:250,width:300,backgroundColor:"white",borderRadius:10 }}>
                            <Text style={{fontSize:25,color:"#099ddb",alignSelf:"center",marginTop:10}}>เรียงตาม</Text>
                            <View style={{height:1,width:"90%",backgroundColor:"#c9c7c7",alignSelf:"center",marginTop:10}} />
                            <Text style={{padding:5,marginLeft:15,fontSize:16,color:"#099ddb"}}>คะแนนความนิยม</Text>
                            <View style={{height:1,width:"90%",backgroundColor:"#c9c7c7",alignSelf:"center",marginTop:10}} />
                            <Text style={{padding:5,marginLeft:15,fontSize:16}}>จำนวนรีวิว</Text>
                            <View style={{height:1,width:"90%",backgroundColor:"#c9c7c7",alignSelf:"center",marginTop:10}} />
                            <Text style={{padding:5,marginLeft:15,fontSize:16}}>ราคาเริ่มต้นจากน้อยไปมาก</Text>
                            <View style={{height:1,width:"90%",backgroundColor:"#c9c7c7",alignSelf:"center",marginTop:10}} />
                            <Text style={{padding:5,marginLeft:15,fontSize:16}}>ราคาเริ่มต้นจากมากไปน้อย</Text>
                        </View>
                    </Modal>



                </View>
            </SafeAreaView>
        </View>
    )
}
