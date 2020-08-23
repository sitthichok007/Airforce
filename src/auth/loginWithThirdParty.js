import React, {useState} from "react";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function LoginThirdParty({navigation}) {
    const [status,setStatus] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
                source={require("../assets/images/house.jpg")}
                style={{width: '100%', height: '100%'}}
            >
                <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
                    <View>
                    <TouchableOpacity style={{backgroundColor:"#3f5c9a",flexDirection:"row",width:"70%",borderRadius:40}}>
                        <View style={{flexDirection:"row",padding:10,display:"flex",justifyContent:"center",width:"100%"}}>
                            <Image source={require("../assets/images/facebook.png")} style={{width:25,height:25}} />
                            <Text style={{color:"white",marginLeft:25,marginTop:3,fontSize:14}}>เข้าสู่ระบบด้วย</Text>
                            <Text style={{color:"white",marginTop:5,fontSize:14,marginLeft:5,fontWeight:"bold"}}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"white",flexDirection:"row",width:"70%",borderRadius:40,marginTop:15}}>
                            <View style={{flexDirection:"row",padding:10,display:"flex",justifyContent:"center",width:"100%"}}>
                                <Image source={require("../assets/images/google.png")} style={{width:25,height:25}} />
                                <Text style={{color:"#d0d0d0",marginLeft:25,marginTop:3,fontSize:14,paddingRight:10}}>เข้าสู่ระบบด้วย</Text>
                                <Text style={{color:"#d0d0d0",marginTop:5,fontSize:14,fontWeight:"bold",paddingRight:15}}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#20ba4f",flexDirection:"row",width:"70%",borderRadius:40,marginTop:15}}>
                            <View style={{flexDirection:"row",padding:10,display:"flex",justifyContent:"center",width:"100%"}}>
                                <Image source={require("../assets/images/line.png")} style={{width:25,height:25}} />
                                <Text style={{color:"white",marginLeft:25,marginTop:3,fontSize:14,paddingRight:10}}>เข้าสู่ระบบด้วย</Text>
                                <Text style={{color:"white",marginTop:5,fontSize:14,fontWeight:"bold",paddingRight:35}}>Line</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",width:"80%",marginTop:30}}>
                    <View style={{height:1,width:"35%",backgroundColor:"white"}} />
                    <Text style={{paddingLeft:10,paddingRight:10,color:"white",fontWeight:"bold",fontSize:16}}>หรือ</Text>
                    <View style={{height:1,width:"35%",backgroundColor:"white"}} />
                    </View>
                    <TouchableOpacity style={{borderColor:"white",borderWidth:1,padding:10,width:"70%",borderRadius:30,justifyContent:"center",alignItems:"center",marginTop:25}}
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>เข้าสู่ระบบ/สมัครสมาชิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("specialScreen")}>
                    <Text style={{color:"white",marginTop:30,fontSize:16}}>
                        Special Mr.Blue CLICK!
                    </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
