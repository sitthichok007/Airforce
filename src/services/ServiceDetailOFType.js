import React from 'react'
import {View,Text,SafeAreaView,Image,TouchableOpacity} from 'react-native'
export default function ServiceDetailOFType({navigation}){
    return (
        <View style={{flex:1,display:"flex"}}>
           <SafeAreaView style={{flex:1,display:"flex"}}>
               <View style={{flex:1,display:"flex"}}>
                   <View style={{padding:20}}>
               <View style={{flexDirection:"row",marginTop:20,alignItems:"center"}}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}>
                   <Image source={require("../assets/images/back.png")} style={{width:25,height:25}} />
                   </TouchableOpacity>
                   <Text style={{color:"#1babf0",fontSize:20}}>ล้างแอร์</Text>
               </View>
                   </View>
                   <Image source={require("../assets/images/washAir.jpg")} style={{width:"100%",height:180}} />
                   <View style={{borderWidth:1,borderColor:"#c4c4c4",justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:30,width:320,borderRadius:10}}>
                       <View style={{flexDirection:"row",display:"flex",width:220,marginTop:15}}>
                           <Image source={require("../assets/images/correct.png")} style={{width:25,height:25,marginRight:30}} />
                           <Text style={{fontSize:16}}>กำลังพล ทอ และครอลครัวมีศักยภาพ</Text>
                       </View>
                       <View style={{flexDirection:"row",display:"flex",width:220,marginTop:10}}>
                           <Image source={require("../assets/images/correct.png")} style={{width:25,height:25,marginRight:30}} />
                           <Text style={{fontSize:16}}>รวดเร็ว ปลอดภัย ใช้ได้</Text>
                       </View>
                       <View style={{flexDirection:"row",display:"flex",width:220,marginBottom:15,marginTop:10}}>
                           <Image source={require("../assets/images/correct.png")} style={{width:25,height:25,marginRight:30}} />
                           <Text style={{fontSize:16}}>มีหน่วยงานตรวจสอบ รองรับในการส่งเสริมอาชีพ</Text>
                       </View>
                   </View>
               </View>


           </SafeAreaView>
        </View>
    )

}
