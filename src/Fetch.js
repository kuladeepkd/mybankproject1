import React,{useEffect,useState} from 'react'
import axios from 'axios';

const Fetch = () => {
    const [result,setResult] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            responce=>setResult(responce.data)
            )
    },[])
  return (
    <div>
        {result.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default Fetch