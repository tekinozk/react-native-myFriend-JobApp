import React from 'react'
import {Text,View,Image, Alert} from "react-native"
import styles from '../Login/Login.style'
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import { Formik } from 'formik'
import usePost from "../hooks/usePost/usePost"
import {API_AUTH_URL} from "@env"
import {useDispatch}  from "react-redux"
import { setUser } from '../../redux/job/jobSlice'
import { log } from 'react-native-reanimated'


function Login({navigation}) {
const {data,loading,error,post} = usePost()
const dispatch = useDispatch()


const handleLogin =(values)=>{
  post(API_AUTH_URL+"/login",values)

}

if(data){
  useDispatch(setUser(data)) 
  Alert.alert("Başvurunuz Gönderildi")
}


 

  



  return (
    <View style={styles.container}>

      <Formik
      initialValues={{username:"",password:""}}
      onSubmit={handleLogin}
          
    
      >
      {({handleChange,handleSubmit,values,handleBlur,handleReset})=>(
        <View style={styles.body_container}> 
 <Input  iconName={"user"} onChangeText={handleChange("username")}  value={values.username} placeholder="Kullanıcı Adı Giriniz" ></Input>
      <Input isSecure iconName={"unlock"} onChangeText={handleChange("password")} value={values.password} placeholder="Şifrenizi Giriniz" ></Input>
      <Button text={"GİRİŞ YAP"} loading={loading} onPress={handleSubmit} ></Button>
      </View>)}
      </Formik>
      <View style={styles.logo_container}>
      <Image style={styles.image} source={require("../../assets/myFriend-logo.png")}/> 
      </View>
    </View>
  )
}

export default Login

