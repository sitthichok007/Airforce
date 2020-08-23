import React from 'react'
import {View,Text,SafeAreaView,StyleSheet,TextInput,Image,TouchableHighlight,ScrollView,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ImageSlider from 'react-native-image-slider';
import {PRIMARY_COLOR} from '../common'

export default function ServiceScreen({navigation}) {
    const images = [
        'https://ct.lnwfile.com/es4s94.jpg',
        'https://placeimg.com/240/240/people',
        'https://placeimg.com/240/240/animals',
        'https://placeimg.com/240/240/beer',
    ];
   return(
       <View style={styles.container}>
           <SafeAreaView style={styles.container}>
               <View style={{display:"flex",flexDirection:"column",flex:1}}>
                    <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
                        <Text style={{fontSize:32,marginLeft:20}}>สวัสดี!</Text>
                    <View style={{display:"flex",flexDirection:"column",alignItems:"flex-end",flex:1}}>
                        <View style={{display:"flex",flexDirection:"row",flex:1}}>
                            <Icon style={{marginTop:10,marginLeft:10}} name={'star'} size={30} />
                            <Icon style={{marginTop:10,marginLeft:10,marginRight:10}} name={'star'} size={30} />
                        </View>
                    </View>
                </View>

                   <View style={{display:"flex",alignItems:"center",marginTop:20,marginBottom:20}}>
                       <View style={{
                           flexDirection:"row",
                           alignItems:"center",
                           backgroundColor: '#fff',
                           width:'80%',
                           borderRadius:10,
                           borderColor:"#C4BEBE",
                           borderWidth:1
                       }}>
                           <Icon style={{marginTop:5,marginLeft:10}} name={'search1'} size={25} />
                           <TextInput style={{
                               paddingTop: 10,
                               paddingRight: 10,
                               paddingBottom: 10,
                               paddingLeft: 0,
                               backgroundColor: '#fff',
                               color: '#424242',
                           }} underlineColorAndroid="transparent"
                                      placeholder={"ค้นหาบริการ"}
                           />
                       </View>
                   </View>
                   <ScrollView style={{flex:1}} contentContainerStyle={{paddingBottom: 60}}>
                   <View style={{display:"flex",flex:1}}>
                   <View style={{backgroundColor:"#F5F5F5",display:"flex",flex:1}}>
                         <View style={{display:"flex",width:"100%",height:170}}>
                         <ImageSlider
                           loopBothSides
                           autoPlayWithInterval={3000}
                           images={images}
                           style={{height:100}}
                           customSlide={({ index, item, style, width }) => (
                               // It's important to put style here because it's got offset inside
                               <View key={index} style={[style, styles.customSlide]}>
                                   <Image source={{ uri: item }} style={styles.customImage} />
                               </View>
                           )}
                       customButtons={(position, move) => (
                           <View style={styles.buttons}>
                               {images.map((image, index) => {
                                   return (
                                       <TouchableHighlight
                                           key={index}
                                           underlayColor="#ccc"
                                           onPress={() => move(index)}
                                           style={styles.button}
                                       >
                                           <View style={{height:5,width:5,backgroundColor:position == index ? "black" : "white",borderRadius:20}} />
                                       </TouchableHighlight>
                                   );
                               })}
                           </View>
                       )}
                   />
                   </View>
                       <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                       <View style={{display:"flex",width:"90%",marginTop:25,flexDirection:"row"}}>
                           <Text style={{fontSize:20,color: PRIMARY_COLOR}}>บริการยอดนิยม</Text>
                           <Icon color={"#FFD700"} style={{paddingTop:5,paddingLeft:5}} name={'star'} size={20} />
                           <TouchableOpacity style={{marginLeft:"auto"}} onPress={()=>navigation.navigate("serviceList")}>
                           <View style={{marginLeft:"auto",padding:5,backgroundColor:PRIMARY_COLOR,borderRadius:10,marginTop:2}}>
                               <Text style={{fontSize:12,color:"#0000FF"}}>ทั้งหมด</Text>
                           </View>
                           </TouchableOpacity>
                       </View>
                       <View style={{backgroundColor:PRIMARY_COLOR,width:"90%",height:1,marginTop:5}} />
                   </View>
                       <View style={{height:150,width:"90%",flexDirection:"row",justifyContent:"center",alignSelf:"center",display: "flex"}}>
                           <View style={{display: "flex",flex:1,height:"100%",width:"90%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ซ่อมรถยนต์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                           <View style={{display: "flex",flex:1,height:"100%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ล้างแอร์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                       </View>

                       <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:40}}>
                           <View style={{display:"flex",width:"90%",marginTop:25,flexDirection:"row"}}>
                               <Text style={{fontSize:20,color: PRIMARY_COLOR}}>บริการยอดนิยม</Text>
                               <Icon color={"#FFD700"} style={{paddingTop:5,paddingLeft:5}} name={'star'} size={20} />
                               <View style={{marginLeft:"auto",padding:5,backgroundColor:PRIMARY_COLOR,borderRadius:10,marginTop:2}}>
                                   <Text style={{fontSize:12,color:"#0000FF"}}>ทั้งหมด</Text>
                               </View>
                           </View>
                           <View style={{backgroundColor:PRIMARY_COLOR,width:"90%",height:1,marginTop:5}} />
                       </View>
                       <View style={{height:150,width:"90%",flexDirection:"row",justifyContent:"center",alignSelf:"center",display: "flex"}}>
                           <View style={{display: "flex",flex:1,height:"100%",width:"90%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ซ่อมรถยนต์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                           <View style={{display: "flex",flex:1,height:"100%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ล้างแอร์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                       </View>

                       <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:40}}>
                           <View style={{display:"flex",width:"90%",marginTop:25,flexDirection:"row"}}>
                               <Text style={{fontSize:20,color: PRIMARY_COLOR}}>บริการยอดนิยม</Text>
                               <Icon color={"#FFD700"} style={{paddingTop:5,paddingLeft:5}} name={'star'} size={20} />
                               <View style={{marginLeft:"auto",padding:5,backgroundColor:PRIMARY_COLOR,borderRadius:10,marginTop:2}}>
                                   <Text style={{fontSize:12,color:"#0000FF"}}>ทั้งหมด</Text>
                               </View>
                           </View>
                           <View style={{backgroundColor:PRIMARY_COLOR,width:"90%",height:1,marginTop:5}} />
                       </View>
                       <View style={{height:150,width:"90%",flexDirection:"row",justifyContent:"center",alignSelf:"center",display: "flex"}}>
                           <View style={{display: "flex",flex:1,height:"100%",width:"90%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ซ่อมรถยนต์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                           <View style={{display: "flex",flex:1,height:"100%"}}>
                               <Image source={{uri:"https://placeimg.com/240/240/people"}} style={{height:"90%",width:"95%",alignSelf:"center",margin:10,borderRadius:10}}  />
                               <Text style={{width:"90%",alignSelf:"center",fontSize:16}}>ล้างแอร์</Text>
                               <View style={{width:"90%",alignSelf:"center",paddingTop:5,display:"flex",flexDirection:"row"}}>
                                   <Text>เริ่มต้น</Text>
                                   <Text style={{paddingLeft:5,fontSize:16}}>500$</Text>
                               </View>
                           </View>
                       </View>
                   </View>
                   </View>
                   </ScrollView>


               </View>
           </SafeAreaView>
       </View>
   )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
        display:"flex"
    }, slider: { backgroundColor: '#000', height: 350 },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginLeft:10,
    },
    button: {
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelected: {
        opacity: 1,
        color: 'red',
    },
    customSlide: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: "100%",
        height: "100%",
    },
});
