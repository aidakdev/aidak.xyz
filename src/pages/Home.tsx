import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Base.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Discord from '../components/discord/Discord'
import Introduction from '../components/Introduction'
import Projects from '../components/projects/Projects'
import ImportantNotice from '../components/ImportantNotice'

export default (
  <div className='content'>
    <Navbar />
    <br />
    <Introduction />
    <br />
    <ImportantNotice />
    <br />
    <Projects />
    <br />
    <Footer />
  </div>
)
