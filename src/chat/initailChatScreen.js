import React,{useState} from 'react'
import {View,Text,SafeAreaView,Image,TouchableOpacity,TextInput,StyleSheet,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal';

//FontAwesome5
export default function InitialChatScreen({navigation}) {
    const [open, setOpen] = useState(false);
    const newScreen = () =>{
        setOpen(false)
        navigation.navigate('ChatWithPerson')
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
                       <Text style={{fontSize:20,color:"#009ada"}}>สมชาย</Text>
                   </View>
               </View>
           <View style={{height:280,width:"100%",backgroundColor:'white',marginBottom:50,
               shadowColor: "#000",
               shadowOffset: {
                   width: 0,
                   height: 5,
               },
               shadowOpacity: 0.34,
               shadowRadius: 6.27,
               elevation: 10,}}>
               <View style={{flex:3}}>
                   <View style={{flexDirection:'row',flex:2}}>
                       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                           <Image source={require('../assets/images/user_profile.jpeg')} style={{width:120,height:120,borderRadius:60}} />
                       </View>
                       <View style={{flex:1,marginLeft:-20}}>
                           <Text style={{fontSize:25,color:'#0da9ef'}}>สมชาย ช่างซ่อม</Text>
                           <Text style={{fontSize:18,color:'#0da9ef'}}>แนะนำ</Text>
                           <Text style={{color:'#939393',width:'80%'}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                           <View style={{flexDirection:'row'}}>
                               <Icon name={'medal'} size={20} />
                               <Icon name={'medal'} size={20} />
                               <Icon name={'medal'} size={20} />
                           </View>
                           <View style={{flexDirection:'row',marginTop:5}}>
                               <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                   <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างไฟฟ้า</Text>
                               </View>
                               <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                   <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างยนต์</Text>
                               </View>
                               <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                   <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างซ่อมแซม- ทั้งหมด</Text>
                               </View>
                           </View>
                       </View>
                   </View>
                   <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                       <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                           <Text style={{fontSize:25,color:'#0babf0'}}>แอร์ติดผนัง</Text>
                           <Text style={{marginLeft:10,fontSize:25,color:'#0babf0',marginTop:3}}>9000</Text>
                           <Text style={{marginLeft:10,fontSize:25,color:'#0babf0',marginTop:3}}>BTU</Text>
                       </View>
                       <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:-10}}>
                           <Text style={{fontSize:25,color:'#939393'}}>ราคาเริ่มต้น</Text>
                           <Text style={{marginLeft:15,fontSize:25,color:'#ff8c22',marginTop:5}}>500</Text>
                           <Text style={{marginLeft:10,fontSize:25,color:'#ff8c22',marginTop:2}}>บาท</Text>
                       </View>
                   </View>
               </View>
               <View style={{height:50,flexDirection:"row",borderWidth:1,borderColor:'#e9e9e9',borderLeftWidth:1,borderLeftColor:'#e9e9e9',marginTop:5}}>
                   <TouchableOpacity style={{width:"50%",height:"100%",justifyContent:"center",alignItems:"center",borderRightColor:'#e9e9e9',borderRightWidth:1}} onPress={()=>setOpen(true)}>
                <View>
                    <Text style={{color:'#07a8ef',fontSize:16}}>ยื่นข้อเสนอ</Text>
                </View>
                   </TouchableOpacity>
                   <View style={{width:"50%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                       <Text style={{color:'#07a8ef',fontSize:16}}>เลือกบริการนี้</Text>
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
               style={styles.view}>
               <View style={{height:520,width:"100%",backgroundColor:"white",alignItems:"center",display:"flex"}}>
                   <View style={{display:"flex",flex:1,width:"100%"}}>
                       <View style={{width:"100%",marginTop:20}}>
                           <TouchableOpacity onPress={()=>setOpen(false)}>
                           <Image source={require("../assets/images/cross_red.png")} style={{width:15,height:15,position:'absolute',right:0,marginRight:10,marginTop:-10}} />
                           </TouchableOpacity>
                       <View style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row",marginRight:40}}>
                           <Image source={require('../assets/images/user_profile.jpeg')} style={{width:120,height:120,borderRadius:60,marginLeft:40}} />
                           <View style={{marginLeft:20}}>
                               <Text style={{fontSize:25,color:'#0da9ef'}}>สมชาย ช่างซ่อม</Text>
                               <Text style={{fontSize:18,color:'#0da9ef'}}>แนะนำ</Text>
                               <Text style={{color:'#939393',width:180}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>
                               <View style={{flexDirection:'row'}}>
                                   <Icon name={'medal'} size={20} />
                                   <Icon name={'medal'} size={20} />
                                   <Icon name={'medal'} size={20} />
                               </View>
                               <View style={{flexDirection:'row',marginTop:5}}>
                                   <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                       <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างไฟฟ้า</Text>
                                   </View>
                                   <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                       <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างยนต์</Text>
                                   </View>
                                   <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>
                                       <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างซ่อมแซม- ทั้งหมด</Text>
                                   </View>
                               </View>
                           </View>
                       </View>
                           <View>
                               <View style={{flexDirection:"row"}}>
                                   <Text style={{fontSize:25,color:'#0babf0',marginLeft:30}}>แอร์ติดผนัง</Text>
                                   <Text style={{marginLeft:30,fontSize:25,color:'#0babf0',marginTop:3}}>9000</Text>
                                   <Text style={{marginLeft:20,fontSize:25,color:'#0babf0',marginTop:3}}>BTU</Text>
                               </View>
                               <View style={{flexDirection:"row"}}>
                                   <Text style={{fontSize:25,color:'#939393',marginLeft:30}}>ราคาเริ่มต้น</Text>
                                   <Text style={{marginLeft:30,fontSize:25,color:'#ff8c22',marginTop:5}}>500</Text>
                                   <Text style={{marginLeft:30,fontSize:25,color:'#ff8c22',marginTop:2}}>บาท</Text>
                               </View>
                           </View>
                       </View>
                       <View style={{height:5,width:"100%",backgroundColor:"#e9e9e9",marginTop:10}} />
                       <View style={{marginLeft:20,marginTop:20}}>
                       <Text style={{color:"#30b9f2",fontSize:17}}>กำหนดราคา</Text>
                       <Text style={{fontSize:18,marginTop:5}}>ราคาเริ่มต้น(500 บาท)</Text>
                       </View>
                       <View style={{display:"flex",flexDirection:"row",marginLeft:'auto',marginRight:'auto',marginTop:15}}>
                           <TouchableOpacity>
                           <Text style={{fontSize:40,marginRight:10,color:"#30b9f2"}}> - </Text>
                           </TouchableOpacity>

                           <Text style={{fontSize:40}}> 400 </Text>
                           <TouchableOpacity>
                           <Text style={{fontSize:40,marginLeft:10,color:"#30b9f2"}}> + </Text>
                           </TouchableOpacity>
                       </View>
                       <View style={{height:5,width:"100%",backgroundColor:"#e9e9e9",marginTop:20}} />
                   </View>
                   <View>
                       <View style={{flexDirection:"row",justifyContent:"space-between",display:"flex",marginBottom:30}}>
                           <TouchableOpacity style={{width:"45%",borderColor:"black",borderWidth:1,borderRadius:30,justifyContent: "center",alignItems:"center"}}>
                               <Text style={{padding:10,fontSize:16}}>ยกเลิก</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{width:"45%",borderColor:"#30b9f2",borderWidth:1,borderRadius:30,justifyContent: "center",alignItems:"center",backgroundColor:"#30b9f2"}} onPress={()=>newScreen()}>
                               <Text style={{padding:10,color:"white",fontSize:16}}>ยื่นข้อเสนอ</Text>
                           </TouchableOpacity>
                       </View>

                   </View>

                   {/*<View style={{justifyContent:"center",display:"flex",alignItems:"center"}}>*/}
                       {/*<View style={{flexDirection:'row',alignSelf:"center",display:"flex",width:"100%"}}>*/}
                       {/*    <View style={{justifyContent:"center",alignItems:"center",display:"flex"}}>*/}
                       {/*        <Image source={require('../assets/images/user_profile.jpeg')} style={{width:120,height:120,borderRadius:60}} />*/}
                       {/*    </View>*/}
                       {/*    <View style={{marginLeft:20}}>*/}
                       {/*        <Text style={{fontSize:25,color:'#0da9ef'}}>สมชาย ช่างซ่อม</Text>*/}
                       {/*        <Text style={{fontSize:18,color:'#0da9ef'}}>แนะนำ</Text>*/}
                       {/*        <Text style={{color:'#939393',width:'80%'}}>ช่างมีประสบการณ์มากกว่า 30 ปี ซ่อมได้ทุกอย่าง</Text>*/}
                       {/*        <View style={{flexDirection:'row'}}>*/}
                       {/*            <Icon name={'medal'} size={20} />*/}
                       {/*            <Icon name={'medal'} size={20} />*/}
                       {/*            <Icon name={'medal'} size={20} />*/}
                       {/*        </View>*/}
                       {/*        <View style={{flexDirection:'row',marginTop:5}}>*/}
                       {/*            <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>*/}
                       {/*                <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างไฟฟ้า</Text>*/}
                       {/*            </View>*/}
                       {/*            <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>*/}
                       {/*                <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างยนต์</Text>*/}
                       {/*            </View>*/}
                       {/*            <View style={{backgroundColor:'#c2edff',padding:5,borderRadius:5,marginLeft:3}}>*/}
                       {/*                <Text style={{fontSize:9,color:'#0da9ef'}}>ช่างซ่อมแซม- ทั้งหมด</Text>*/}
                       {/*            </View>*/}
                       {/*        </View>*/}
                       {/*    </View>*/}
                       {/*</View>*/}
                       {/*<View style={{justifyContent:"center",alignItems:"center"}}>*/}
                       {/*    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>*/}
                       {/*        <Text style={{fontSize:25,color:'#0babf0'}}>แอร์ติดผนัง</Text>*/}
                       {/*        <Text style={{marginLeft:10,fontSize:25,color:'#0babf0',marginTop:3}}>9000</Text>*/}
                       {/*        <Text style={{marginLeft:10,fontSize:25,color:'#0babf0',marginTop:3}}>BTU</Text>*/}
                       {/*    </View>*/}
                       {/*    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:-10}}>*/}
                       {/*        <Text style={{fontSize:25,color:'#939393'}}>ราคาเริ่มต้น</Text>*/}
                       {/*        <Text style={{marginLeft:15,fontSize:25,color:'#ff8c22',marginTop:5}}>500</Text>*/}
                       {/*        <Text style={{marginLeft:10,fontSize:25,color:'#ff8c22',marginTop:2}}>บาท</Text>*/}
                       {/*    </View>*/}
                       {/*</View>*/}
                   {/*</View>*/}
               </View>

           </Modal>

       </View>
   )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
