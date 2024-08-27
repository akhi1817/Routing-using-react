import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

    const nav=useNavigate();

  return (
    
    <>
    <h1 className='text-dark text-center mt-5'>Contact Us page</h1>
    <p className='text-center mt-4'>
            <button className='btn btn-danger mx-3 px-3'onClick={()=>nav('/about')}>About us</button>
            <button className='btn btn-success mx-3  px-3'onClick={()=>nav('/service')}>Services</button>
        </p>
    
    </>
  )

}
