import React from 'react'

const SpotifyActivity = props => {
    return (
        <div className='spotify'>
            <h1 className='section-title'>
                LISTENING TO SPOTIFY
            </h1>

            <div className='activity'>
                <div className='x-activity'>
                    <div className='playing'>
                        <img src={props.activity.album_art_url} />
                    </div>
                </div>

                <div className='x-info'>
                    <span className='x-title'>{props.activity.song}</span>

                    <span className='x-subtitle'>by {props.activity.artist}</span><br/>
                    <span className='x-subtitle'>in the album {props.activity.album}</span>
                </div>
            </div>

            <br/>
        </div>
    )
}

export default SpotifyActivity