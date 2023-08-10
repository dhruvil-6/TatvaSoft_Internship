import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div style={{textAlign : 'center'}}>
        <h1>
        Welcome to the Contact Page
        </h1>

        <br/>
        <br/>

        <Link to='/Home'>Go to Home Page</Link>

        </div>
  )
}

export default Contact