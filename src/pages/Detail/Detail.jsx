import {React,useState} from 'react'
import { Text,View,Alert,ActivityIndicator,ScrollView } from 'react-native'
import useFetch from "../hooks/useFetch"
import {API_JOBS_DETAIL_URL} from "@env"
import RenderHtml from "react-native-render-html"
import { useWindowDimensions } from 'react-native'
import styles from '../Detail/Detail.style'
import Button from '../components/Button/Button'
import { useDispatch } from 'react-redux'
import { addFavourite } from '../../redux/job/jobSlice'


function Detail({route,navigation}) {
const [disable,setDisable] = useState(true)

  const {id} = route.params
  const {data,loading,error} = useFetch(`${API_JOBS_DETAIL_URL}${id}`)
  const dispatch = useDispatch()
  const source = {
    html:`${data.contents}`
  }
const {width} = useWindowDimensions()

if(error){
  return <Text>{error.message}</Text>
}
if(loading){
  return <ActivityIndicator size="large"></ActivityIndicator>
}  

const handlePress = (item) => {
dispatch(addFavourite(item))
setDisable(false)
Alert.alert("MyFriend : ","İlan favorilere eklendi")
}

const handleSubmit = () =>{
  navigation.navigate("Login")
}


  return (
<ScrollView>
<Text style={styles.jobName}>{data.name}</Text>
<RenderHtml style={styles.def} source={source} contentWidth={width}></RenderHtml>
<View style={{flexDirection:"row"}}>
<Button name={"tag"} onPress={handleSubmit} text={"Submit"}/>
<Button disabled={!disable} onPress={()=>handlePress(data)} name={"star"} text={"Favourite"} />
</View>
</ScrollView>
  )
}

export default Detail