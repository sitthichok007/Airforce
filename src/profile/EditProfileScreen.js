import React,{useState} from 'react'
import {View,Text,Image,StyleSheet,SafeAreaView,TouchableOpacity,TextInput,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {PRIMARY_COLOR} from '../common';


export default function EditProfileScreen({navigation}) {
    const [Sex,setSex] = useState(1);

    const switchSex = (typeSex) =>{
      setSex(typeSex);
    };


  return(
      <View style={styles.container}>
          <SafeAreaView style={styles.container}>
              <View style={{display:"flex",flexDirection:"row",marginTop:20}}>
                  <TouchableOpacity onPress={()=>navigation.goBack()}><IonicIcon size={35} name={'chevron-back'} color={PRIMARY_COLOR} /></TouchableOpacity>
                  <Text style={styles.headerTextEditProfileScreen}>แก้ไขโปรไฟล์</Text>
              </View>
              <View style={{justifyContent:"center",alignItems:"center",display:"flex",marginTop:20}}>
                  <View style={{width:120,height:120}}>
                        <Image source={{uri:"https://placeimg.com/240/240/people"}} style={styles.ImageProfileEditProfileScreen} />
                        <TouchableOpacity style={styles.cameraButtonEditProfileScreen}>
                            <Icon name={"camera"} color={"white"} size={22} />
                        </TouchableOpacity>
                  </View>
              </View>
              <ScrollView>
              <View style={{display:"flex",flex:1,marginTop:40}}>
                  <View>
                      <Text style={{marginLeft:20,paddingBottom:10}}>ชื่อ</Text>
                      <TextInput style={{width:"90%",borderColor:"#DCDCDC",borderWidth:1,height:35,borderRadius:10,paddingLeft:30,color:"#DCDCDC",alignSelf:"center"}}
                      value={"ไมตรี"}
                      />
                  </View>
                  <View>
                      <Text style={{marginLeft:20,paddingBottom:10,marginTop:10}}>นามสกุล</Text>
                      <TextInput style={{width:"90%",borderColor:"#DCDCDC",borderWidth:1,height:35,borderRadius:10,paddingLeft:30,color:"#DCDCDC",alignSelf:"center"}}
                                 value={"เมตตา"}
                      />
                  </View>
                  <View>
                      <Text style={{marginLeft:20,paddingBottom:10,marginTop:10}}>เบอร์โทร</Text>
                      <TextInput style={{width:"90%",borderColor:"#DCDCDC",borderWidth:1,height:35,borderRadius:10,paddingLeft:30,color:"#DCDCDC",alignSelf:"center"}}
                                 value={"099-999-9999"}
                      />
                  </View>
                  <View>
                      <Text style={{marginLeft:20,paddingBottom:10,marginTop:10}}>Email</Text>
                      <TextInput style={{width:"90%",borderColor:"#DCDCDC",borderWidth:1,height:35,borderRadius:10,paddingLeft:30,color:"#DCDCDC",alignSelf:"center"}}
                                 value={"maitri@gmail.com"}
                      />
                  </View>
                  <View>
                      <Text style={{marginLeft:20,paddingBottom:10,marginTop:10}}>เพศ</Text>
                     <View style={{display:"flex",flexDirection:"row",marginLeft:20}}>
                      <TouchableOpacity style={{borderColor:PRIMARY_COLOR,borderWidth:1,borderRadius:10,height:40,width:70,justifyContent:"center"}} onPress={()=>switchSex(1)}>
                        <Text style={{padding:5,alignSelf:"center",color:Sex === 1 ? PRIMARY_COLOR : "#DCDCDC" }}>ชาย</Text>
                      </TouchableOpacity>
                         <TouchableOpacity style={{borderColor:PRIMARY_COLOR,borderWidth:1,borderRadius:10,height:40,width:70,justifyContent:"center",marginLeft:10}} onPress={()=>switchSex(2)}>
                             <Text style={{padding:5,alignSelf:"center",color:Sex === 2 ? PRIMARY_COLOR : "#DCDCDC" }}>หญิง</Text>
                         </TouchableOpacity>
                     </View>
                  </View>
                  <TouchableOpacity style={[styles.logoutButton,{marginTop:30}]}>
                      <Text style={styles.TextLogout}>บันทืก</Text>
                  </TouchableOpacity>
              </View>
              </ScrollView>
          </SafeAreaView>
      </View>
  )
}


