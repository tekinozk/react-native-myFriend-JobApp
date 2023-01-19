import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create ({
    container:{},
    image:{
        width:Dimensions.get("window").width ,
        height:Dimensions.get("window").height / 4, 
      marginLeft:10,
      resizeMode:"contain",
      backgroundColor:"white"

    },
    bodyContainer:{padding:15,},
    title:{fontWeight:"bold",
    marginBottom:10,
},
    desc:{fontStyle:"italic"},
    price:{fontWeight:"bold",marginTop:10,
textAlign:"right",
fontSize:22,},
jobName:{
    fontSize:22,
    fontWeight:"bold",
    color:"#03a9f4",
    margin:12,
},


})