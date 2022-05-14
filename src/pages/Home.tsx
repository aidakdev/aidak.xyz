import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Base.css'

import Navbar from '../components/Navbar'
import Discord from '../components/discord/Discord'
import Introduction from '../components/Introduction'
import Projects from '../components/projects/Projects'

export default (
  <div className='content'>
    <Navbar />
    <br/>

    <Introduction />
    <br />
    
    <Discord />
    <br /> <br/>

    <Projects />
  </div>
)