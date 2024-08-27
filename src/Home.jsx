import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const nav=useNavigate();
  return (
    <>
    <h1 className='text-center text-dark mt-5'>Home Page</h1>
    <p className='text-center mt-4'>
    <button className='btn btn-danger text-center mx-3 px-3' onClick={()=> nav('/blog')}>Go to Blog</button>
    <button className='btn btn-success text-center mx-3 px-3' onClick={()=> nav('/about')}>About us</button>
    </p>
    
    </>
    
  )
}
