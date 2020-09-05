import React from 'react'
import {View,Text,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
export default function SelectAddress() {
    return(
        <View style={{display:"flex",flex:1,padding:15}}>
            <SafeAreaView style={{display:"flex",flex:1}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                        <Image source={require("../assets/images/back.png")} style={{width:30,height:30}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:"#009ada"}}>เลือกที่อยู่</Text>
                </View>
                <View style={{height:2,width:"95%",backgroundColor:"#009ada",marginTop:15,alignSelf:"center"}} />
                <View style={{display:"flex",flexDirection:"row",paddingRight:10}}>
                    <Text style={{fontSize:22,color:"#009ada",marginLeft:10,marginTop:10}}>สถานที่รับบริการ</Text>
                    <TouchableOpacity style={{marginLeft:"auto",flexDirection:"row"}}>
                        <Image source={require("../assets/images/plus.png")} style={{width:20,height:20,marginTop:15}} />
                        <Text style={{marginTop:15,marginLeft:5,color:"#099ddb"}}>เพิ่มที่อยู่</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{marginTop:"auto",alignSelf:"center",backgroundColor:"#099ddb",width:"100%",justifyContent:"center",alignItems:"center",height:40,borderRadius:20}}>
                    <Text style={{color:"white",fontSize:24,fontWeight:"bold"}}>เลือก</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    )
}
