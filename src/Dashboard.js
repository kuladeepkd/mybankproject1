import React from 'react'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
  const {id}= useParams();
    return (
     <div><h1>Dashbord content displaying:{id}</h1></div>
  )
}

export default Dashboard