import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRouterDOM from 'react-router-dom'

import Home from './pages/home'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <ReactRouterDOM.BrowserRouter>
        <div className='app'>
            <ReactRouterDOM.Routes>
                <ReactRouterDOM.Route path='/' element={Home} />
            </ReactRouterDOM.Routes>
        </div>
    </ReactRouterDOM.BrowserRouter>
)