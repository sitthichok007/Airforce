/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, ImageBackground,
  Image,
  TextInput,
    TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ServiceScreen from './src/home/serviceScreen';
import BottomTabHome from './src/home/BottomTabHome';
import EditProfileScreen from './src/profile/EditProfileScreen';
import Login from './src/auth/auth'
import MyAddress from './src/services/myaddress'
import LocationSearchScreen from "./src/home/locationSearchScreen";
import ResearchSearch from "./src/home/resultSearch";
import LoginThirdParty from "./src/auth/loginWithThirdParty";
import ListTabs from "./src/listtab/ListTabs";
import MyTabs from './src/services/BottomTabsService'
import ServiceList from "./src/services/ServiceList";
import SpecialLoginScreen from "./src/auth/SpecialLoginScreen";
import SpecialRegisterScreen from "./src/register/specialregisterScreen";
import identityScreen from './src/register/IdentityScreen'
import identitySuccessScreen from './src/register/IdentifySuccess'
import CareerTypeScreen from "./src/register/careerTypeScreen";
import WorkTypeScreen from "./src/register/workTypeScreen";
import WorkTypeDetailScreen from "./src/register/workTypeDetailScreen";
import SelectLocationScreen from "./src/register/SelectLocation";
import WorkDetailScreen from "./src/register/workDetailScreen";
import ConfirmEmailScreen from "./src/register/confirmEmailScreen";
import ConfirmEmailSuccessScreen from "./src/register/confirmEmailSuccess";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreenV2() {
  const [status,setStatus] = useState(0);


  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
            source={require("./src/assets/images/house.jpg")}
            style={{width: '100%', height: '100%'}}
        >
          <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",width:300}}>
              <TouchableOpacity onPress={()=>setStatus(0)}>
              <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginRight:10}}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>
              <View style={{backgroundColor:"#07a8ef",padding:8,borderRadius:50}}>
                <Image source={require("./src/assets/images/user.png")} style={{width:30,height:30,padding:10}} />
              </View>
              <TouchableOpacity onPress={()=>setStatus(1)}>
              <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginLeft:10}}>สมัครสมาชิก</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:300,height:status === 1 ? 400 : 220,backgroundColor:"white",opacity:.8,borderRadius:10,marginTop:20,zIndex:-5}}>
              {status === 1 ? <View style={{ width: 30, height: 60, overflow: 'hidden', backgroundColor: "white", top: -20, right: 40, position: 'absolute', transform: [{ rotate: '45deg' }] }} />
               : <View style={{ width: 30, height: 60, overflow: 'hidden', backgroundColor: "white", top: -20, left: 20, position: 'absolute', transform: [{ rotate: '45deg' }] }} /> }
             <View style={{display:"flex",justifyContent:"center"}}>
               {
                 status === 1 ?
                     <>
                       <TextInput
                           placeholder={"ชื่อ"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                       />
                       <TextInput
                           placeholder={"นามสกุล"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                       />
                       <TextInput
                           placeholder={"เบอร์โทร"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                       />
                       <TextInput
                           placeholder={"อีเมล"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                       />
                       <TextInput
                           placeholder={"รหัสผ่าน"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                       />
                       <TouchableOpacity style={{backgroundColor:"#07a8ef",width:"80%",height:40,justifyContent:"center",alignItems:"center",borderRadius:60,zIndex:10,alignSelf:"center",marginTop:20}}>
                         <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>ลงทะเบียน</Text>
                       </TouchableOpacity>
                     </> :
                     <>
                       <TextInput
                           placeholder={"รหัสผ่านใหม่"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}

                       />
                       <TextInput
                           placeholder={"อีเมล"}
                           style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:20,fontSize:14,borderBottomColor:"#939393",alignSelf:"center" }}
                       />

                       <TouchableOpacity style={{alignSelf:"flex-end",marginRight:30,marginTop:5}}>
                         <Text style={{fontSize:10}}>ลืมรหัสผ่าน</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:"#07a8ef",width:"80%",height:40,justifyContent:"center",alignItems:"center",borderRadius:60,zIndex:10,alignSelf:"center",marginTop:10}}>
                         <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>ยืนยัน</Text>
                       </TouchableOpacity>
                     </>


               }
             </View>
            </View>
          </View>
        </ImageBackground>
      </View>
  );
}

function ForgetPassword() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
            source={require("./src/assets/images/house.jpg")}
            style={{width: '100%', height: '100%'}}
        >
          <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
             <View style={{width:300,height:300,borderRadius:10,position:"relative"}}>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <View style={{backgroundColor:"#0280a5",borderRadius:100,position:'absolute',top:-20}}>
                 <Image source={require("./src/assets/images/unlock.png")} style={{width:50,height:50,margin:10,zIndex:10}} />
               </View>
            </View>
               <View style={{backgroundColor:"white",width:300,height:300,opacity:.9,zIndex:-5,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                 <TextInput
                     placeholder={"รหัสผ่านใหม่"}
                     style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:30,fontSize:20 }}

                 />
                 <TextInput
                     placeholder={"อีเมล"}
                     style={{ height: 40,borderBottomWidth:1,width:"80%",marginTop:40,fontSize:20 }}

                 />
                 <TouchableOpacity style={{backgroundColor:"#07a8ef",width:"80%",height:40,justifyContent:"center",alignItems:"center",marginTop:50,borderRadius:60}}>
                   <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>ยืนยัน</Text>
                 </TouchableOpacity>
               </View>


            </View>
          </View>

        </ImageBackground>

      </View>
  );
}



function HomeTab(){
  return(
      <>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreenV2} />
          <Tab.Screen name="Settings" component={ServiceScreen} />
        </Tab.Navigator>
      </>
  )
}

const App: () => React$Node = () => {
  return (
    <>
      {/*<StatusBar barStyle="dark-content" />*/}
      {/*<SafeAreaView>*/}
      {/*  <ScrollView*/}
      {/*    contentInsetAdjustmentBehavior="automatic"*/}
      {/*    style={styles.scrollView}>*/}
      {/*    <Header />*/}
      {/*    {global.HermesInternal == null ? null : (*/}
      {/*      <View style={styles.engine}>*/}
      {/*        <Text style={styles.footer}>Engine: Hermes</Text>*/}
      {/*      </View>*/}
      {/*    )}*/}
      {/*    <View style={styles.body}>*/}
      {/*      <View style={styles.sectionContainer}>*/}
      {/*        <Text style={styles.sectionTitle}>Step One</Text>*/}
      {/*        <Text style={styles.sectionDescription}>*/}
      {/*          Edit <Text style={styles.highlight}>App.js</Text> to change this*/}
      {/*          screen and then come back to see your edits.*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <View style={styles.sectionContainer}>*/}
      {/*        <Text style={styles.sectionTitle}>See Your Changes</Text>*/}
      {/*        <Text style={styles.sectionDescription}>*/}
      {/*          <ReloadInstructions />*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <View style={styles.sectionContainer}>*/}
      {/*        <Text style={styles.sectionTitle}>Debug</Text>*/}
      {/*        <Text style={styles.sectionDescription}>*/}
      {/*          <DebugInstructions />*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <View style={styles.sectionContainer}>*/}
      {/*        <Text style={styles.sectionTitle}>Learn More</Text>*/}
      {/*        <Text style={styles.sectionDescription}>*/}
      {/*          Read the docs to discover what to do next:*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <LearnMoreLinks />*/}
      {/*    </View>*/}
      {/*  </ScrollView>*/}
      {/*</SafeAreaView>*/}
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="loginThird"
        >
          <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTabHome} />
          <Stack.Screen options={{headerShown:false}} name={"editProfile"} component={EditProfileScreen} />
          <Stack.Screen options={{headerShown:false}} name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown:false}} name={"mymap"} component={MyAddress} />
          <Stack.Screen options={{headerShown:false}} name={"locationSearch"} component={LocationSearchScreen} />
          <Stack.Screen options={{headerShown:false}} name={"resultSearch"} component={ResearchSearch} />
          <Stack.Screen options={{headerShown:false}} name={"loginThird"} component={LoginThirdParty} />
          <Stack.Screen options={{headerShown:false}} name={"listtab"} component={ListTabs} />
          <Stack.Screen options={{headerShown:false}} name={"tabService"} component={MyTabs} />
          <Stack.Screen options={{headerShown:false}} name={"serviceList"} component={ServiceList} />
          <Stack.Screen options={{headerShown:false}} name={"specialScreen"} component={SpecialLoginScreen} />
          <Stack.Screen options={{headerShown:false}} name={"specialRegister"} component={SpecialRegisterScreen} />
          <Stack.Screen options={{headerShown:false}} name={"Identify"} component={identityScreen} />
          <Stack.Screen options={{headerShown:false}} name={"IdentifySuccess"} component={identitySuccessScreen} />
          <Stack.Screen options={{headerShown:false}} name={"CareerType"} component={CareerTypeScreen} />
          <Stack.Screen options={{headerShown:false}} name={"WorkTypeScreen"} component={WorkTypeScreen} />
          <Stack.Screen options={{headerShown:false}} name={"WorkTypeDetailScreen"} component={WorkTypeDetailScreen} />
          <Stack.Screen options={{headerShown:false}} name={"selectLocation"} component={SelectLocationScreen} />
          <Stack.Screen options={{headerShown:false}} name={"workDetailScreen"} component={WorkDetailScreen} />
          <Stack.Screen options={{headerShown:false}} name={"confirmEmail"} component={ConfirmEmailScreen} />
          <Stack.Screen options={{headerShown:false}} name={"confirmEmailSuccess"} component={ConfirmEmailSuccessScreen} />








        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
