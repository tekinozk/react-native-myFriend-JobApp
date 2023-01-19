import {React} from 'react'
import {Text,FlatList,ActivityIndicator } from 'react-native'
import useFetch from "../hooks/useFetch"
import {API_JOBS_URL} from "@env"
import JobsCard from '../components/JobsCard/JobsCard'
import { useDispatch } from 'react-redux'
import { changeJob } from '../../redux/job/jobSlice'


function Jobs({navigation}) {


const {data,loading,error} =useFetch(API_JOBS_URL)
const dispatch = useDispatch() 

const renderProduct = ({item}) => {
const handleSelect = (id,name) => {
  dispatch(changeJob(name))
  navigation.navigate("Detail",{id}
  
  )
}



  return(
<JobsCard onSelect={()=>handleSelect(item.id,item.categories[0].name)} jobs={item} />
  )

} 

if(error){
  return <Text>{error.message}</Text>
}

if(loading){
  return <ActivityIndicator size="large"></ActivityIndicator>
}  
  
  
  return (

<FlatList data={data.results} renderItem={renderProduct}>

</FlatList>
  
  )
}

export default Jobs
