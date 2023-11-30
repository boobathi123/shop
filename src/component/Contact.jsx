import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Contact() {
    const submit=()=>{
        alert("Thank you for your response");
    }
  return (
    <div>
         <div className='40-2 p-5 rounded bg-white'>
            <form action="">
                <center><h3> For Contact:</h3></center>
                <div className='mb-2'>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="email" placeholder='Enter FirstName' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='Enter your email' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Phone</label>
                    <input type="Password" placeholder='Enter password' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Any queries</label>
                    <input type="text" placeholder='Enter password' className='form-control'/>
                </div>
                <div className='d-grid mb-2'>
                        <button className='btn btn-primary' onClick={submit}>Submit</button>
                </div>
               
            </form>
        </div>
    </div>
  )
}
