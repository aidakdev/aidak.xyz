import React from 'react'

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark dark-secondary'>
      <div className='container-fluid'>
          <a className='navbar-brand' href='#'>Aidak</a>

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav ms-auto'>
                <a className='nav-link active' aria-current='page' href='#'>Home</a>
                <a className='nav-link' href='https://discordredirect.discordsafe.com/users/152569284390944768'>Discord</a>
                <a className='nav-link' href='https://twitch.tv/aidakx'>Twitch</a>
              </div>
          </div>
      </div>
  </nav>
)

export default Navbar