import React from 'react'
import {TouchableOpacity,Text, ActivityIndicator,View} from "react-native"
import styles from "./Button.style"
import Icon from "react-native-vector-icons/EvilIcons"
function Button({text,name,onPress,disabled}) {
  return (
 <TouchableOpacity disabled={disabled} onPress={onPress}  style={styles.container}>
  <View style={styles.btn_container}>
<Text text={text} style={styles.title}>{text}</Text>
    <Icon color="white" name={name} size={40}/>
  </View>
 </TouchableOpacity>
  )
}

export default Button