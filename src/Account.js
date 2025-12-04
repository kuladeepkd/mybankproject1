import React from 'react'
import { useSelector } from 'react-redux'

export const Account = () => {
    const data=useSelector((state)=>{
return state
    })
  return (
    <div className='accountDetails-container '>
       
        <div className='text-start'>
             <h1>account details</h1>
            <table className='table table-bordered  border-dark'>
                <thead>
                    <tr>
                        <th>user name </th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.username}</td>
                         <td>{data.mobile}</td>
                          <td>{data.email}</td>
                           <td>{data.balance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
