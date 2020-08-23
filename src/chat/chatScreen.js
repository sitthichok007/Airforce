import React from 'react'
import {View,Text,SafeAreaView,Image,FlatList} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";
import {PRIMARY_COLOR} from "../common";

export default function ChatScreen() {
  return(
      <View style={{display:"flex",flex:1}}>
          <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
              <View style={{backgroundColor:"white",padding:20,shadowColor: "#000",
                  shadowRadius: 2,
                  shadowOffset: {
                      width: 0,
                      height: 5,
                  },
                  elevation: 4,
                  shadowOpacity: 0.50,
                  flexDirection:"row"
              }}>
                  <View style={{flex:1}}>
                      <Text style={{fontSize:20}}>ข้อความ</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                      <Icon name={'star'} size={30} />
                      <Icon name={'star'} size={30} style={{marginLeft:10}} />
                  </View>

              </View>
              <View style={{display:"flex",width:"100%"}}>

                  <View style={{justifyContent:"center",display:"flex",alignItems:"center"}}>
                      <View style={{width:"85%"}}>

                      <View style={{alignSelf:"flex-end",display:"flex"}}>
                          <Text style={{marginTop:10,fontSize:16}}>ติดต่อเจ้าหน้าที่</Text>
                      </View>
                      </View>
                      {/*<FlatList*/}
                      {/*    data={*/}
                      {/*        [*/}
                      {/*            {*/}
                      {/*        "id":1*/}
                      {/*            },*/}
                      {/*            {*/}
                      {/*                "id":2*/}
                      {/*            },*/}
                      {/*            {*/}
                      {/*                "id":3*/}
                      {/*            },*/}

                      {/*    ]}*/}
                      {/*    contentContainerStyle={{justifyContent: 'center',display:"flex",alignItems:"center"}}*/}
                      {/*    renderItem={({item})=>{*/}
                      {/*        return(*/}

                      {/*            <View style={{width:"85%",flexDirection:"row",marginTop:20,borderBottomColor:PRIMARY_COLOR,borderBottomWidth:1,paddingBottom:10}}>*/}

                      {/*                <Image source={require("../assets/images/user_profile.jpeg")} style={{width:80,height:80,borderRadius:40,padding:20}} />*/}
                      {/*                <View style={{justifyContent:"center",marginLeft:15,width:"100%"}}>*/}
                      {/*                    <View style={{flexDirection:"row",display:"flex",width:"75%"}}>*/}
                      {/*                        <View style={{flex:1}}>*/}
                      {/*                            <Text style={{fontSize:16}}>สมชาย ช่างซ่อม</Text>*/}
                      {/*                        </View>*/}
                      {/*                        <View style={{flexDirection:"row"}}>*/}
                      {/*                            <Text style={{fontSize:10}}>7/2/2563 10:15</Text>*/}
                      {/*                        </View>*/}
                      {/*                    </View>*/}



                      {/*                    <View style={{flexDirection:"row"}}><Text style={{fontSize:10,marginTop:10}}>วันนี้เข้าไปตอนเที่ยงนะครับ</Text>*/}
                      {/*                        <View style={{backgroundColor:"red",justifyContent:"center",width:20,height:20,borderRadius:10,display:"flex",alignSelf:"center",marginTop:5,marginLeft:5}}>*/}
                      {/*                            <Text style={{fontSize:14,alignSelf:"center",color:"white"}}>1</Text>*/}
                      {/*                        </View>*/}
                      {/*                    </View>*/}
                      {/*                </View>*/}
                      {/*            </View>*/}

                      {/*        )*/}

                      {/*    }}*/}
                      {/*    keyExtractor={item => item.id}*/}
                      {/*/>*/}

                      <View style={{width:"90%",flexDirection:"row",marginTop:20,borderBottomColor:PRIMARY_COLOR,borderBottomWidth:1,paddingBottom:10,opacity: .5,backgroundColor:"#fff3dd"}}>

                          <Image source={require("../assets/images/user_profile.jpeg")} style={{width:65,height:65,borderRadius:40,padding:20,marginTop:10,marginLeft:10}} />
                          <View style={{justifyContent:"center",marginLeft:15,width:"95%"}}>
                              <View style={{flexDirection:"row",display:"flex",width:"75%"}}>
                                  <View style={{flex:1}}>
                              <Text style={{fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                  </View>
                                  <View style={{flexDirection:"row"}}>
                                      <Text style={{fontSize:10}}>7/2/2563 10:15</Text>
                                  </View>
                              </View>



                              <View style={{flexDirection:"row"}}><Text style={{fontSize:10,marginTop:10}}>วันนี้เข้าไปตอนเที่ยงนะครับ</Text>
                                <View style={{backgroundColor:"red",justifyContent:"center",width:20,height:20,borderRadius:10,display:"flex",alignSelf:"center",marginTop:5,marginLeft:5}}>
                                    <Text style={{fontSize:14,alignSelf:"center",color:"white"}}>1</Text>
                                </View>
                              </View>
                          </View>
                      </View>
                      <View style={{width:"90%",flexDirection:"row",borderBottomColor:PRIMARY_COLOR,borderBottomWidth:1,paddingBottom:10}}>

                          <Image source={require("../assets/images/user_profile.jpeg")} style={{width:65,height:65,borderRadius:40,padding:20,marginTop:10,marginLeft:10}} />
                          <View style={{justifyContent:"center",marginLeft:15,width:"95%"}}>
                              <View style={{flexDirection:"row",display:"flex",width:"75%"}}>
                                  <View style={{flex:1}}>
                                      <Text style={{fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                  </View>
                                  <View style={{flexDirection:"row"}}>
                                      <Text style={{fontSize:10}}>7/2/2563 10:15</Text>
                                  </View>
                              </View>



                              <View style={{flexDirection:"row"}}><Text style={{fontSize:10,marginTop:10}}>วันนี้เข้าไปตอนเที่ยงนะครับ</Text>
                                  <View style={{backgroundColor:"red",justifyContent:"center",width:20,height:20,borderRadius:10,display:"flex",alignSelf:"center",marginTop:5,marginLeft:5}}>
                                      <Text style={{fontSize:14,alignSelf:"center",color:"white"}}>1</Text>
                                  </View>
                              </View>
                          </View>
                      </View>
                      <View style={{width:"90%",flexDirection:"row",borderBottomColor:PRIMARY_COLOR,borderBottomWidth:1,paddingBottom:10}}>

                          <Image source={require("../assets/images/user_profile.jpeg")} style={{width:65,height:65,borderRadius:40,padding:20,marginTop:10,marginLeft:10}} />
                          <View style={{justifyContent:"center",marginLeft:15,width:"95%"}}>
                              <View style={{flexDirection:"row",display:"flex",width:"75%"}}>
                                  <View style={{flex:1}}>
                                      <Text style={{fontSize:16}}>สมชาย ช่างซ่อม</Text>
                                  </View>
                                  <View style={{flexDirection:"row"}}>
                                      <Text style={{fontSize:10}}>7/2/2563 10:15</Text>
                                  </View>
                              </View>



                              <View style={{flexDirection:"row"}}><Text style={{fontSize:10,marginTop:10}}>วันนี้เข้าไปตอนเที่ยงนะครับ</Text>
                                  <View style={{backgroundColor:"red",justifyContent:"center",width:20,height:20,borderRadius:10,display:"flex",alignSelf:"center",marginTop:5,marginLeft:5}}>
                                      <Text style={{fontSize:14,alignSelf:"center",color:"white"}}>1</Text>
                                  </View>
                              </View>
                          </View>
                      </View>


                  </View>

              </View>
          </SafeAreaView>
      </View>
  )
}
