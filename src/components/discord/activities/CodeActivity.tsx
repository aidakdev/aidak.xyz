import React from 'react'

const CodeActivity = props => {
    return (
        <div className='vscode'>
            <h1 className='section-title'>
                IN VISUAL STUDIO CODE
            </h1>

            <div className='activity'>
                <div className='x-activity'>
                    <div className='playing'>
                        <img src={
                            'https://cdn.discordapp.com/app-assets/' 
                            + props.activity.application_id + '/' 
                            + props.activity.assets.large_image + '.png'
                        } />
                    </div>
                </div>

                <div className='x-info'>
                    <span className='x-title'>{props.activity.name}</span>

                    <span className='x-subtitle'>{props.activity.details}</span><br/>
                    <span className='x-subtitle'>{props.activity.state}</span>
                </div>
            </div>

            <br/>
        </div>
    )
}

export default CodeActivity