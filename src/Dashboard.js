import React from 'react'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
  const {id}= useParams();
    return (
    <div>Dashbord content displaying:{id}</div>
  )
}

export default Dashboard