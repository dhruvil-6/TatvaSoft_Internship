import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function View() {
  return (
    <div style={{textAlign : 'center'}}>
        <h1> Welcome to the View Page</h1>

        <br/>
        <br/>

        <Link to='/Home'>Go to Home Page</Link>
    </div>
  )
}

export default View