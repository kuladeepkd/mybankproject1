import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
export const Forms = () => {
    
   const dispatch=useDispatch(); 
   const [name,setName]=useState('')
   const [mobile,setMobile]=useState('');
   const [email,setEmail]=useState('');
   const [amount,setAmount]=useState('');
   
  return (
    <div className='text-start m-20'>
        <h1>forms</h1>
        <div className='input input-bordered border-dark '>
           
             <input
              type='text' 
              placeholder='username'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
          
             <button className='btn btn-bordered border-dark  mt-25'
             onClick={()=>{
                dispatch({type:"usernameupdate",payload:name});
                setName('');
             }}>
                submit
                </button>
           
           </div>
           <div>
            <input
            type='text'
            placeholder='enter mobile number'
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            />
            <button
            className='btn btn-bordered border-dark mt-20 '
            onClick={()=>{dispatch({type:'mobileupdate',payload:mobile});
        setMobile('');
    }}>
        submit
        </button>
           </div>
        
      <div>
        <input className='email'
        type='email' 
        placeholder='enter valid email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <button className='btn btn-bordered border-dark mt-20 '
        onClick={()=>{dispatch({type:"emailupdate",payload:email});
    setEmail('');
}}
        >
            submit
            </button>
      </div>
      <div>
        <input className='diposit'
        type='number'
        placeholder='enter amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
       />
       <button className='btn btn-bordered border-dark mt-20'
       onClick={()=>{dispatch({type:'diposit',payload:amount});
    setAmount('');
}}
       >
        diposit
       </button>
       <button className='btn btn-bordered border-dark mt-20'
       onClick={()=>{dispatch({type:'withdraw',payload:amount});
       setAmount('');
       }}>
        withdraw
        </button>

      </div>


    </div>
  )
}
