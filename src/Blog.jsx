import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blog(){

    const nav=useNavigate()
    return(
        <>
        <h1 className="text-center text-dark mt-5">Our Blog Page</h1>
        <p className='text-center mt-4'>
            <button className='btn btn-danger mx-3 px-3'onClick={()=>nav('/service')}>Services</button>
            <button className='btn btn-success mx-3  px-3'onClick={()=>nav('/')}>Back to Home</button>
        </p>
        </>
    )
}