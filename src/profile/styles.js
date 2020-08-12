import {StyleSheet} from "react-native";
import {PRIMARY_COLOR} from '../common';

export default StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        marginRight: 10,
        marginLeft: 10
    },
    hrline: {
        width: '95%',
        height: 1,
        backgroundColor: PRIMARY_COLOR,
        alignSelf: "flex-end",
        marginTop: 10
    },
    logoutButton: {
        height: 50,
        backgroundColor: PRIMARY_COLOR,
        width: "90%",
        alignSelf: "center",
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },
    ImageProfile:{
        height:120,
        width:120,
        margin:10,
        borderRadius:120/2
    },
    TextLogout:{
        fontSize:20,
        color:"white"
    },
    TouchableOpacityView:{
        display:"flex",
        flexDirection:"row"
    },
    TextName:{
        fontSize:23,
        marginLeft:"auto",
        marginRight:"auto",
    },
    IconStyle:{
        marginTop:10,
        marginLeft:20
    },
    containerProfileView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 140,
        marginTop: 10
    },
    headercontainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        flex:1,
    },
    ImageProfileEditProfileScreen:
        {
            height:120,
            width:120,
            borderRadius:120/2,
        },
    cameraButtonEditProfileScreen:{
        backgroundColor:PRIMARY_COLOR,
        width:35,
        height:35,
        borderRadius:35/2,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:0,
        top:90
    },
    headerTextEditProfileScreen: {
        fontSize:23,
        marginLeft:10,
        color:PRIMARY_COLOR
    }
});
