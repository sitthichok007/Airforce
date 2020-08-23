import React from 'react'
import {View,Text,Image,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function ProfileScreen({navigation}) {
  return(
      <View style={styles.container}>
          <SafeAreaView style={styles.container}>
              <View style={{display:"flex",flexDirection:"column"}}>
                  <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
                      <Text style={{fontSize:28}}>ฉัน</Text>
                      <View style={styles.headercontainer}>
                          <View style={{display:"flex",flexDirection:"row",flex:1}}>
                              <Icon style={{marginTop:10,marginLeft:10}} name={'star'} size={30} />
                          </View>
                      </View>
                  </View>
              </View>
              <View style={styles.hrline}/>
              <View style={{flex:1,display: 'flex'}}>
                  <View style={styles.containerProfileView}>
                      <Image source={{uri:"https://placeimg.com/240/240/people"}} style={styles.ImageProfile}  />
                      <Text style={styles.TextName}>ไมตรี เมตตา</Text>
                  </View>
                  <View style={styles.hrline}/>
                  <TouchableOpacity style={styles.TouchableOpacityView} onPress={()=>navigation.navigate("editProfile")}>
                      <Icon style={styles.IconStyle} name={'star'} size={30} />
                      <Text style={{padding:15}}>แก้ไขข้อโปรไฟล์</Text>
                  </TouchableOpacity>
                  <View style={styles.hrline}/>
                  <TouchableOpacity style={styles.TouchableOpacityView}>
                      <Icon style={styles.IconStyle} name={'enviromento'} size={30} />
                      <Text style={{padding:15}}>ที่อยู่ของฉัน</Text>
                  </TouchableOpacity>
                  <View style={styles.hrline}/>
                  <TouchableOpacity style={styles.TouchableOpacityView}>
                      <Icon style={styles.IconStyle} name={'questioncircleo'} size={30} />
                      <Text style={{padding:15}}>ช่วยเหลือ</Text>
                  </TouchableOpacity>
                  <View style={styles.hrline}/>
                  <TouchableOpacity style={styles.TouchableOpacityView}>
                      <Icon style={styles.IconStyle} name={'hearto'} size={30} />
                      <Text style={{padding:15}}>รายการโปรด</Text>
                  </TouchableOpacity>
                  <View style={styles.hrline}/>
              </View>
              <TouchableOpacity style={styles.logoutButton} onPress={()=>navigation.replace("loginThird")}>
                  <Text style={styles.TextLogout}>ออกจากระบบ</Text>
              </TouchableOpacity>
          </SafeAreaView>
      </View>
  )
}



