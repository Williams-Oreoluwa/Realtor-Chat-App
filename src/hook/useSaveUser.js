import { useState, useEffect } from "react";
import axios from "axios";


const useSaveUser = (endpoint, userData)=>{
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


      const fetchData = async () =>{
          setIsLoading(true)
          try {
              const response = await axios.post(endpoint, userData)
              setData(response.data.data)
              setIsLoading(false)
          } catch (error) {
              setError(error)
              alert('There is an error')
          } finally {
              setIsLoading(false)
          }
      }
      
      
      useEffect(()=>{
          fetchData();   
      }, [])
      
      const refetch = ()=>{
          setIsLoading(true)
          fetchData();
      }

      return { data, isLoading, error, refetch }
}
 
export default useSaveUser;