import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [auth,setAuth]= useState(false);
  const Navigate=useNavigate();
const handleLogin =()=> {
  setAuth(true);
  Navigate('/Dashboard');

}
  

  return (
    <div>Home content displaying<br/>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Home