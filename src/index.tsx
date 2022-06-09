import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
        <div className='app'>
            <Routes>
                <Route path='/' element={Home} />
            </Routes>
        </div>
    </BrowserRouter>
)