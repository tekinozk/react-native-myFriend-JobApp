import axios from 'axios'
import {React,useEffect,useState} from 'react'



function useFetch(url) {


    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
  
  

  
    const fetchData = async () => {
  try {
    const {data:responseData} = await axios(url)
  setData(responseData)
  setLoading(false)
  } catch (error) {
    setLoading(false)
    setError(error)
  }

    }
    useEffect(() => {
        fetchData()
        }, [])

    return {data,loading,error}

}
export default useFetch