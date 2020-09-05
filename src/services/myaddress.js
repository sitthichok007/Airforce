import React from 'react'
import {View,Text,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
export default function MyAddress({navigation}) {
  return(
      <View style={{display:"flex",flex:1,padding:15}}>
          <SafeAreaView style={{display:"flex",flex:1}}>
              <View style={{flexDirection:"row"}}>
                  <TouchableOpacity onPress={()=>navigation.goBack()}>
                      <Image source={require("../assets/images/back.png")} style={{width:30,height:30}} />
                  </TouchableOpacity>
                  <Text style={{fontSize:20,color:"#009ada"}}>เลือกที่อยู่</Text>
              </View>
              <View style={{height:2,width:"95%",backgroundColor:"#009ada",marginTop:15,alignSelf:"center"}} />
              <View style={{display:"flex",flexDirection:"row",paddingRight:10}}>
                  <Text style={{fontSize:22,color:"#009ada",marginLeft:10,marginTop:10}}>สถานที่รับบริการ</Text>
                  <TouchableOpacity style={{marginLeft:"auto",flexDirection:"row"}} onPress={()=>navigation.navigate('customerLocation')}>
                      <Image source={require("../assets/images/plus.png")} style={{width:20,height:20,marginTop:15}} />
                      <Text style={{marginTop:15,marginLeft:5,color:"#099ddb"}}>เพิ่มที่อยู่</Text>
                  </TouchableOpacity>
              </View>
              <View style={{borderWidth:1,width:"100%",borderRadius:10,borderColor:"#c4c4c4",marginTop:15}}>
                  <Image source={require("../assets/images/check.png")} style={{width:30,height:30,marginTop:5,marginLeft:5}} />
                  <View style={{marginLeft:40,flexDirection:"row"}}>
                      <Icon name={'home'} size={50} color={"#099ddb"} />
                      <Text style={{width:"80%",marginLeft:10,color:"#099ddb",marginBottom:10}}>MPAC ACTIVE (Thailand) Ltd 43 Thai CC Tower 156-7 Rm. 15 Fl South Sathorn Rd Tannawa Sathon Banngkok 10120</Text>
                  </View>
              </View>
              <TouchableOpacity style={{marginTop:"auto",alignSelf:"center",backgroundColor:"#099ddb",width:"100%",justifyContent:"center",alignItems:"center",height:40,borderRadius:20}}
              onPress={()=>navigation.navigate('BookDetailScreen')}
              >
                  <Text style={{color:"white",fontSize:24,fontWeight:"bold"}}>เลือก</Text>
              </TouchableOpacity>

          </SafeAreaView>
      </View>
  )
}
