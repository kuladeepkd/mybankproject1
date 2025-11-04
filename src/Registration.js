import axios from 'axios'
import React ,{useState}from 'react'
const Registration = () => {
const [data,setData] = useState({
   username:'',
    email:'',
    password:''
})
const {username,email,password} = data;
const onChange = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler =e=> 
{e.preventDefault();
axios.post('https://mybank-project-01-default-rtdb.firebaseio.com/registar.json',data)
.then(()=>alert('data posted successfully'))}


  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' name='username' value={username} placeholder='enter your name' onChange={onChange}/><br/>
<input type='text' name='email' value={email} placeholder='enter email' onChange={onChange}/><br/>
<input type='password' name='password' value={password} placeholder='enter password' onChange={onChange}/><br/>
<input type='submit' name='submit' />
        </form>
    </div>
  )
}

export default Registration