import React from 'react'

const Introduction = () => {
    const _titleWeight = { fontWeight: 400 }

    return (
        <div className='intro'>
            <div className='introduction-title'>
                <h1 className='title title-weird-fix' style={_titleWeight}>Hello, my name is</h1>
                <h1 className='title'>Aidak.</h1>
            </div>

            <p className='title-weird-fix'>
                I'm a 16-year-old developer from Spain.
                <br />
                I'm specialized in developing back-end systems, Discord/Revolt bots and webpages.
                <br />
                I mainly use TypeScript (Node/React), Elixir and Rust for these tasks. 
            </p>
        </div>
    )
}

export default Introduction