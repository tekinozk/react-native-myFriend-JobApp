import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{backgroundColor:"#bbdefb",
borderWidth:1,
borderColor:"grey",
margin:6,
marginTop:10,
flexDirection:"row",

},
   
    bodyContainer:{padding:10,
        flex:1,
        minHeight:100,
        
    },
    title:{ 
        fontWeight:"bold",
        fontSize:18,
     },
    location:{
        fontSize:16,
        fontWeight:"bold"
    },
    name:{
        marginTop:20,
        fontWeight:"bold",
        marginLeft:290,
    },
    icon:{
        flexDirection:"row",
        marginTop:30,
   
    },
   removebtn:{
    height:80,
    width:350,
    
   }

})


export default styles