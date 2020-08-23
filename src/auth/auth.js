import React, {useState} from "react";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function Login({navigation}) {
    const [status,setStatus] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
                source={require("../assets/images/house.jpg")}
                style={{width: '100%', height: '100%'}}
            >
                <TouchableOpacity style={{zIndex:10}} onPress={()=>navigation.goBack()}>
                <View>
                    <Image source={require("../assets/images/back.png")} style={{width:30,height:30,position:"absolute",top:70,left:20}} />
                </View>
                </TouchableOpacity>
                <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",width:300}}>
                        <TouchableOpacity onPress={()=>setStatus(0)}>
                            <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginRight:10}}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                        <View style={{backgroundColor:"#07a8ef",padding:8,borderRadius:50}}>
                            <Image source={require("../assets/images/user.png")} style={{width:30,height:30,padding:10}} />
                        </View>
                        <TouchableOpacity onPress={()=>setStatus(1)}>
                            <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginLeft:10}}>สมัครสมาชิก</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:300,height:status === 1 ? 400 : 220,backgroundColor:"white",opacity:.8,borderRadius:10,marginTop:20,zIndex:-5}}>
                        {status === 1 ? <View style={{ width: 30, height: 60, overflow: 'hidden', backgroundColor: "white", top: -20, right: 40, position: 'absolute', transform: [{ rotate: '45deg' }] }} />
                            : <View style={{ width: 30, height: 60, overflow: 'hidden', backgroundColor: "white", top: -20, left: 20, position: 'absolute', transform: [{ rotate: '45deg' }] }} /> }
                        <View style={{display:"flex",justifyContent:"center"}}>
                            {
                                status === 1 ?
                                    <>
                                        <TextInput
                                            placeholder={"ชื่อ"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                                        />
                                        <TextInput
                                            placeholder={"นามสกุล"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                                        />
                                        <TextInput
                                            placeholder={"เบอร์โทร"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                                        />
                                        <TextInput
                                            placeholder={"อีเมล"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                                        />
                                        <TextInput
                                            placeholder={"รหัสผ่าน"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                                        />
                                        <TouchableOpacity style={{backgroundColor:"#07a8ef",width:"80%",height:40,justifyContent:"center",alignItems:"center",borderRadius:60,zIndex:10,alignSelf:"center",marginTop:20}}>
                                            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>ลงทะเบียน</Text>
                                        </TouchableOpacity>
                                    </> :
                                    <>
                                        <TextInput
                                            placeholder={"รหัสผ่านใหม่"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                                        />
                                        <TextInput
                                            placeholder={"อีเมล"}
                                            style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                                        />

                                        <TouchableOpacity style={{alignSelf:"flex-end",marginRight:30,marginTop:5}}>
                                            <Text style={{fontSize:10}}>ลืมรหัสผ่าน</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor:"#07a8ef",width:"80%",height:40,justifyContent:"center",alignItems:"center",borderRadius:60,zIndex:10,alignSelf:"center",marginTop:10}}
                                        onPress={()=>navigation.replace("Home")}
                                        >
                                            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>ยืนยัน</Text>
                                        </TouchableOpacity>
                                    </>
                            }
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
