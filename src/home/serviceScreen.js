import React,{useState,useRef} from 'react'
import {View,Text,SafeAreaView,StyleSheet,TextInput,Image,TouchableHighlight,ScrollView,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ImageSlider from 'react-native-image-slider';
import {PRIMARY_COLOR} from '../common'


export default function ServiceScreen({navigation}) {
    const fqText = ['แม่บ้าน', 'ช่างไฟฟ้า', 'ช่างประปา', 'ดูแลสวน', 'ช่างยนต์', 'ซ่อมเครื่องปรับอากาศ', 'ส่งเอกสาร', 'ส่งอาหาร', 'ช่างเทคนิค', 'ซ่อมคอมพิวเตอร์', 'คนขับรถ', 'ซ่อมบำรุง']
    const workType = ['ทำความสะอาดทั่วไป', 'ทำความสะอาดห้องน้ำ', 'พ่นฆ่าเชื้อโรค', 'รีดผ้า', 'ซักผ้า', 'ทำความสะอาดรถ']
    const workDetail = ['ทำความสะอาดพื้นห้องน้ำ', 'ทำความสะอาดโถส้วม', 'ทำความสะอาดก๊อกน้ำ', 'ทำความสะอาดอ่างล้างหน้า', 'พ่นฆ่าเชื้อโรค']
    const [onFocus,setOnFocus] = useState(false)
    const InputRef = useRef(null);


    // const UnFocus = () =>{
    //     setOnFocus(false)
    // };

    const images = [
        'https://ct.lnwfile.com/es4s94.jpg',
        'https://placeimg.com/240/240/people',
        'https://placeimg.com/240/240/animals',
        'https://placeimg.com/240/240/beer',
    ];
   return(
       <View style={styles.container}>
           {/*<TouchableWithoutFeedback style={styles.container}>*/}
           <SafeAreaView style={styles.container}>

               <View style={{display:"flex",flexDirection:"column",flex:1}}>
                   <TouchableWithoutFeedback onPress={()=>setOnFocus(false)}>
                   <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
                        <Text style={{fontSize:32,marginLeft:20}}>สวัสดี!</Text>
                    <View style={{display:"flex",flexDirection:"column",alignItems:"flex-end",flex:1}}>
                        <View style={{display:"flex",flexDirection:"row",flex:1}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')}><Icon style={{marginTop:10,marginLeft:10}} color={'#939393'} name={'shoppingcart'} size={30} /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('notification')}><Icon style={{marginTop:10,marginLeft:10,marginRight:10}} color={'#939393'} name={'bells'} size={30} /></TouchableOpacity>
                        </View>
                    </View>
                </View>
                   </TouchableWithoutFeedback>

                   <View style={{display:"flex",alignItems:"center",marginTop:20,marginBottom:20}} >
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
                               width:"80%",
                               backgroundColor: '#fff',
                               color: '#424242',

                           }} underlineColorAndroid="transparent"
                                      placeholder={"ค้นหาบริการ"}
                                      onFocus={()=>setOnFocus(true)}
                                      ref={InputRef}
                           />
                       </View>
                       {
                           onFocus ?
                               <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                               <View style={styles.dropSearchContainer}>


                                   <Text style={styles.headerText}>สถานที่ปฏิบัติงาน</Text>
                                   <View style={styles.searchBox}>
                                       <TouchableOpacity style={styles.inputChoose} onPress={()=>navigation.navigate('locationSearch')}>
                                           <Text style={styles.inputChooseText}>ระบุสถานที่ปฏิบัติงาน</Text>
                                           <Icon style={styles.chooseIcon} name="right" size={18} color="#939393" />
                                       </TouchableOpacity>
                                   </View>

                                   <Text style={styles.headerText}>คำค้นยอดนิยม</Text>
                                   <View style={styles.tagsContainer}>

                                       {
                                           fqText.map((value, key) => {
                                               return (
                                                   <TouchableOpacity key={key} style={styles.tagsItem}>
                                                       <Text style={styles.tagsItemText}>{value}</Text>
                                                   </TouchableOpacity>
                                               )
                                           })
                                       }

                                   </View>

                                   <Text style={styles.headerText}>ประเภทงาน</Text>
                                   <View style={styles.tagsContainer}>

                                       {
                                           workType.map((value, key) => {
                                               return (
                                                   <TouchableOpacity key={key} style={styles.tagsItem}>
                                                       <Text style={styles.tagsItemText}>{value}</Text>
                                                   </TouchableOpacity>
                                               )
                                           })
                                       }

                                   </View>

                                   <Text style={styles.headerText}>รายละเอียดงาน</Text>
                                   <View style={styles.tagsContainer}>

                                       {
                                           workDetail.map((value, key) => {
                                               return (
                                                   <TouchableOpacity key={key} style={styles.tagsItem}>
                                                       <Text style={styles.tagsItemText}>{value}</Text>
                                                   </TouchableOpacity>
                                               )
                                           })
                                       }

                                   </View>

                                   <TouchableOpacity style={styles.searchButton} onPress={()=>navigation.navigate('resultSearch')}>
                                       <Text style={styles.searchButtonText}>ค้นหา</Text>
                                   </TouchableOpacity>

                               </View>
                               </ScrollView>
                               : null
                       }
                   </View>
                   {/*{onFocus ? <View style={{height:20,width:100}} /> : null}*/}

                   <ScrollView style={{flex:1}} contentContainerStyle={{paddingBottom: 60}}>
                       <TouchableWithoutFeedback onPress={()=>setOnFocus(false)}>
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
                       </TouchableWithoutFeedback>
                   </ScrollView>


               </View>
           </SafeAreaView>
           {/*</TouchableWithoutFeedback>*/}


       </View>
   )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
        display:"flex",
        backgroundColor:"white"
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
    searchContainer: {
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 30,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#939393',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    inputText: {
        fontSize: 18,
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10,
    },
    inputChoose: {
        height: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 320,
        paddingLeft: 20
    },
    inputChooseText: {
        fontSize: 16,
        color: '#939393',
        alignItems: 'center',
        marginTop: -3
    },
    dropSearchContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30
    },
    headerText: {
        color: '#3dbaf2',
        fontSize: 18,
        paddingVertical: 10
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    tagsItem: {
        backgroundColor: '#c2edff',
        alignSelf: 'flex-start',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 5,
        marginLeft: 5,
        marginBottom: 5
    },
    tagsItemText: {
        color: '#199ed5',
        fontSize: 14
    },
    searchButton: {
        backgroundColor: '#00a9ef',
        marginVertical: 20,
        marginHorizontal: 30,
        borderRadius: 30
    },
    searchButtonText: {
        color: '#fff',
        paddingVertical: 7,
        textAlign: 'center',
        fontSize: 20
    }

});
