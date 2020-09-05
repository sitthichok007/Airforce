import React,{useState} from 'react'
import {View,Text,SafeAreaView,Image,TouchableOpacity,TextInput,StyleSheet,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal';

export default function ChatWithPersonScreen({navigation}) {
    const [open, setOpen] = useState(false);

     const NewScreen = () =>{
         setOpen(false)
         navigation.navigate('CartScreen')
     }
   return(
       <View style={{display:"flex",flex:1}}>
           <SafeAreaView />
           <View style={{flex:1,display:"flex"}}>
               <View style={{flexDirection:"row",padding:20,alignItems:"center",      backgroundColor:"white",
                   shadowRadius: 2,
                   shadowOffset: {
                       width: 0,
                       height: 7,
                   },
                   shadowColor: '#000000',
                   elevation: 4,
                   shadowOpacity: 0.10,
                   zIndex:2}}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}>
                       <Image source={require("../assets/images/back.png")} style={{width:20,height:20}} />
                   </TouchableOpacity>
                   <Text style={{fontSize:20,color:"#009ada",marginLeft:20}}>สมชาย ช่างซ่อม</Text>

               </View>
               <View style={{flex:1,display:"flex",paddingLeft:20,paddingRight:20}}>
                   <Text style={{alignSelf:"center",color:"#a9a9a9",marginTop:20}}>พ เวลา 12.45 น.</Text>
                   <View style={{flexDirection:"row",marginLeft:'auto',marginTop:15}}>
                       <View style={{width:230,
                           shadowColor: "#000",
                           shadowOffset: {
                               width: 0,
                               height: 5,
                           },
                           shadowOpacity: 0.34,
                           shadowRadius: 6.27,

                           elevation: 10,
                            backgroundColor:"white"
                           ,marginRight:10
                       }}>
                           <View style={{flexDirection:"row",justifyContent:"center"}}>
                               <Image source={require('../assets/images/user_profile.jpeg')} style={{width:45,height:45,borderRadius:20,marginTop:5,marginLeft:5}} />
                             <View>
                               <Text style={{fontSize:16,marginLeft:10}}>สมชาย ช่างซ่อม</Text>
                                 <Text style={{marginLeft:10,fontSize:12}}>แนะนำ</Text>
                                 <Text style={{fontSize:10,width:160,marginLeft:10}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                             </View>
                           </View>
                           <View style={{marginTop:10,justifyContent:"center",alignItems:"center",backgroundColor:'#07a8ef'}}>
                               <Text style={{padding:8,fontSize:16,color:"white"}}>ยื่นข้อเสนอแล้ว</Text>
                           </View>
                       </View>
                       <Image source={require('../assets/images/user_profile.jpeg')} style={{width:45,height:45,borderRadius:20}} />
                   </View>

                   <View style={{flexDirection:"row",marginRight:'auto',marginTop:15}}>
                       <Image source={require('../assets/images/user_profile.jpeg')} style={{width:45,height:45,borderRadius:20,marginRight:10}} />
                       <View style={{width:230,
                           shadowColor: "#000",
                           shadowOffset: {
                               width: 0,
                               height: 5,
                           },
                           shadowOpacity: 0.34,
                           shadowRadius: 6.27,
                           elevation: 10,
                           backgroundColor:"white"
                           ,marginRight:10
                       }}>

                           <View style={{flexDirection:"row",justifyContent:"center"}}>
                               <Image source={require('../assets/images/user_profile.jpeg')} style={{width:45,height:45,borderRadius:20,marginTop:10,marginLeft:10}} />
                               <View>
                                   <Text style={{fontSize:16,marginLeft:10}}>สมชาย ช่างซ่อม</Text>
                                   <Text style={{marginLeft:10,fontSize:12}}>แนะนำ</Text>
                                   <Text style={{fontSize:10,width:160,marginLeft:10}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                               </View>
                           </View>
                           <TouchableOpacity style={{marginTop:10,justifyContent:"center",alignItems:"center",backgroundColor:'#68a850'}} onPress={()=>setOpen(true)}>
                               <Text style={{padding:8,fontSize:16,color:"white"}}>ยื่นข้อเสนอแล้ว กดเลย!</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </View>

           </View>
           <View style={{width:"100%",height:50}}>
               <View style={{width:"100%",height:1,backgroundColor:'#e9e9e9',marginLeft:5,marginRight:5}} />
               <View style={{flexDirection:'row',alignItems:'center',display:'flex',justifyContent:'center',marginTop:Platform.OS === 'ios' ? 10 : 5}}>
                   <Image source={require('../assets/images/cross.png')} style={{width: 15,height: 15,marginRight:10}} />

                   <TextInput style={{width:"80%",backgroundColor:'#ededed',height:Platform.OS === 'ios' ? 30 : 40,borderRadius:6,paddingLeft:10}} placeholder={'พิมพ์ข้อความ...'} />
                   <Image source={require('../assets/images/smile.png')} style={{width: 25,height: 25,marginLeft:15}} />
               </View>
           </View>
           <View style={{width:"100%",backgroundColor:"white",height:80,borderTopWidth:1,borderTopColor:"#e9e9e9",flexDirection:"row",justifyContent:"space-between",display:"flex",alignItems:'flex-end'}}>

               <TouchableOpacity style={{flex:1,display:"flex",height: 80,justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:'#e9e9e9'}}>
                   <Image source={require("../assets/images/camera.png")} style={{width: 40,height: 40}}  />
                   <Text>กล้อง</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,display:"flex",height: 80,justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:'#e9e9e9'}}>
                   <Image source={require("../assets/images/image.png")} style={{width: 40,height: 40}}  />
                   <Text>กล้อง</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,display:"flex",height: 80,justifyContent:"center",alignItems:"center"}}>
                   <Image source={require("../assets/images/file.png")} style={{width: 40,height: 40}}  />
                   <Text>กล้อง</Text>
               </TouchableOpacity>
           </View>
           <Modal
               testID={'modal'}
               isVisible={open}
               style={{justifyContent:"center",alignItems:"center"}}
               >
               <View style={{height:330,width:350,backgroundColor:"white",display:"flex",borderRadius:20}}>
                   <Text style={{fontSize:25,fontWeight:"bold",alignSelf:"center",marginTop:20,color:"#07a8ef"}}>ยืนยันการใช้บริการ</Text>
                   <Text style={{fontSize:25,fontWeight:"bold",paddingLeft:20,marginTop:20}}>ล้างแอร์</Text>
                   <Text style={{fontSize:25,paddingLeft:20,color:"#07a8ef"}}>แอร์ติดผนัง 9000 BTU</Text>
                   <View style={{flexDirection:"row",paddingLeft:20,marginTop:20}}>
                       <Text style={{fontSize:18}}>ราคาเริ่มต้น</Text>
                       <Text style={{textDecorationLine:"line-through",fontSize:18}}>(500 บาท)</Text>
                   </View>
                   <Text style={{fontSize:35,fontWeight:"bold",alignSelf:"center"}}>400 บาท</Text>
                   <TouchableOpacity style={{backgroundColor:"#07a8ef",width:180,alignSelf:"center",justifyContent:"center",alignItems:"center",borderRadius:30,marginTop:30}}>
                       <Text style={{padding:10,fontSize:17,color:"white"}} onPress={()=>NewScreen()}>เพิ่มลงตระกร้า</Text>
                   </TouchableOpacity>



               </View>

           </Modal>
       </View>
   )
}
