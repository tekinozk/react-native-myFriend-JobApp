import React from 'react'
import {Text,FlatList} from "react-native"
import JobsCard from '../components/JobsCard/JobsCard'
import useFetch from '../hooks/useFetch'
import {API_JOBS_DETAIL_URL} from "@env"
import { useSelector } from 'react-redux'
import {useState} from "react"


function Favourite({route}) {
    const [isRemoveBtn,setIsRemoveBtn] = useState(true)
const {favouriteJobs} = useSelector(s=>s.job)
console.log(favouriteJobs);

const renderFav = ({item}) =>{
return <JobsCard isRemoveBtn={isRemoveBtn} jobs={item}/>
}

if(favouriteJobs.length > 0){
    return (
        <FlatList keyExtractor={(favouriteJobs)=>favouriteJobs.id} data={favouriteJobs} renderItem={renderFav} ></FlatList>    
  )
}
else{ return <Text style={{textAlign:"center",marginTop:100,fontSize:20,fontWeight:"bold"}} >Favori ilanınız bulunmamaktadır...</Text>}
    

   

 
}

export default Favourite