import React from 'react'
import App from "../App"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function InlineCss() {
  return (
    <div className='mt-4 bg-warning text-center'>
        <h1 style={{color:"red",borderStyle:"solid"}}>This is heading</h1>
        <h2 className='bg-primary'>hello how are you .</h2>
        <h3 className='abc'>hello</h3>
        
    </div>
  )
}
