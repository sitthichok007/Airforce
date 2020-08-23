import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'


export default function LocationSearchScreen() {
   return(
       <View style={{display:"flex",flex:1,padding:30}}>
           <SafeAreaView style={{display:"flex",flex:1}}>
               <View style={{marginTop:10}}>
               <View style={{flexDirection:"row",alignItems:"center"}}>
                   <TouchableOpacity>
                       <Image source={require("../assets/images/back.png")} style={{width:25,height:25}} />
                   </TouchableOpacity>
                   <Text style={{fontSize:20,color:"#009ada",marginTop:-3,marginLeft:5}}>ค้นหา</Text>
               </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>กรุงเทพมหานคร</Text>
                       <View style={{height:1,width:"100%",backgroundColor:"#c4c2c2",marginTop:10}} />
                   </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>นครปฐม</Text>
                       <View style={{height:1,width:"100%",backgroundColor:"#c4c2c2",marginTop:10}} />
                   </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>นนทบุรี</Text>
                       <View style={{height:1,width:"100%",backgroundColor:"#c4c2c2",marginTop:10}} />
                   </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>ปทุมธานี</Text>
                       <View style={{height:1,width:"100%",backgroundColor:"#c4c2c2",marginTop:10}} />
                   </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>สมุทรสาคร</Text>
                       <View style={{height:1,width:"100%",backgroundColor:"#c4c2c2",marginTop:10}} />
                   </View>
                   <View style={{marginLeft:10,marginTop:10}}>
                       <Text style={{marginLeft:10,fontSize:17,color:"#666666"}}>สมุทรปราการ</Text>

                   </View>
               </View>
           </SafeAreaView>
       </View>
   )
}
