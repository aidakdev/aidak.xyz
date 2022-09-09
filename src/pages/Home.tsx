import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Base.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Discord from '../components/discord/Discord'
import Introduction from '../components/Introduction'
import Projects from '../components/projects/Projects'

export default (
  <div className='content'>
    <Navbar />
    <br/>

    <div className='announcement'>
      <img 
        style={{marginLeft: '300px'}}
        src='https://file.coffee/u/V84E5FvqIv84Eceu_cd74.jpg'
        width='600px'
      >
      </img>

      <div 
        className='text' 
        style={{display: 'inline-block', marginLeft: '220px'}}
      >
        <p className='smol-text'>IN MEMORIAM</p>
        <h1>Her Majesty</h1>
        <h1 className='withinter'><strong>Queen Elizabeth II</strong></h1>
        <h4>1926 - 2022</h4>
      </div>
    </div>

    <Footer />
  </div>
)