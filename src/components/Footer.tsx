import React from 'react'
import { Twitter, Github, Twitch, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                <div className='col-md-4 d-flex align-items-center'>
                    <span>© {new Date().getFullYear()} Aidak. All rights reserved.</span>
                </div>

                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a className='text-muted' href='https://github.com/theklakes'>
                            <Github />
                        </a>
                    </li>

                    <li className='ms-3'>
                        <a className='text-muted' href='https://twitter.com/realaidak'>
                            <Twitter />
                        </a>
                    </li>

                    <li className='ms-3'>
                        <a className='text-muted' href='https://twitch.tv/aidakx'>
                            <Twitch />
                        </a>
                    </li>

                    <li className='ms-3'>
                        <a className='text-muted' href='https://youtube.com/c/LegiónAidakiana'>
                            <Youtube />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
