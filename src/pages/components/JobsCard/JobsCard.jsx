import React from 'react'
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native'
import styles from "./JobsCard.style"
import axios from 'axios'
import { useState,useEffect } from 'react'
import Icon from "react-native-vector-icons/EvilIcons"
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { removeFavourite } from '../../../redux/job/jobSlice'


function JobsCard({onSelect,jobs,isRemoveBtn}) {
const dispatch = useDispatch()

const removeFav = (id) => {
  dispatch(removeFavourite(id))
}

  return (
<TouchableWithoutFeedback  onPress={onSelect} >
<View style={styles.container}>
      <View style={styles.bodyContainer} >
<Text style={styles.title}>{jobs.name}</Text>
<View style={styles.icon}>
<Icon name="location" size={25} color="grey" ></Icon>
<Text style={styles.location}>{jobs.locations[0].name} </Text>
</View>
<Text style={styles.name} >{jobs.levels[0].name} </Text>
<View style={styles.removebtn} >
{isRemoveBtn && (<Button  text={"REMOVE"} onPress={()=>removeFav(jobs.id)} />)
      }
      </View>

      </View>


    </View>
</TouchableWithoutFeedback>
   

 )
}

export default JobsCard