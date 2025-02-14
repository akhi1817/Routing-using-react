import React from "react";
import { useNavigate } from "react-router-dom";

export default function Service(){
    const nav=useNavigate();
    return(
        <>
        <h1 className="text-center text-dark mt-5">Our Services Page</h1>
        <p className='text-center mt-4'>
            <button className='btn btn-danger mx-3 px-3'onClick={()=>nav('/contact')}>Contact  us</button>
            <button className='btn btn-success mx-3  px-3'onClick={()=>nav('/blog')}>Blog</button>
        </p>
        </>
    )
}