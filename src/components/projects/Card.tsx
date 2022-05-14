import React from 'react'

const Card = props => {
    return (
        <div className='project-card dark-secondary'>
            <h3 className='card-title'>{props.name}</h3>

            <div className='card-language-info'>
                <div className={'card-language-circle ' + props.language + '-color-bg'} />
                <p className={'smol-text-alt ' + props.language + '-color'}>
                    {props.language.toUpperCase()}
                </p>
            </div>

            <p>{props.description}</p>
            <br />
            <a href={props.link} className='card-button'>
                Learn more
            </a>
        </div>
    )
}

export default Card