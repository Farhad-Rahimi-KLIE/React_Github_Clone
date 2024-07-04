import React, { useState } from 'react'
import './style.css'
import git from '../images/github_logo.png'
import Overview from './Overview';
import {Link} from 'react-router-dom'
const Blieve = () => {

  return (
    <>
    <div className="container">
        <a href="/overview">
        <img src={git} alt="Google.jpg" />
        </a>
    </div>
    </>
  )
}

export default Blieve
