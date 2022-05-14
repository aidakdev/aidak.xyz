import React from 'react'

const OfflineActivity = props => {
    return (
        <div className='nothing-in-the-internet'>
            <h1 className='section-title'>
                OFFLINE
            </h1>

            <div className='activity'>
                <div className='x-activity'>
                    <div className='playing'>
                        <img src={props.kikiLookItsMe} />
                    </div>
                </div>

                <div className='x-info'>
                    <span className='x-title'>Drinking a cup of coffee?</span>

                    <span className='x-subtitle'>doin' homework? no please</span><br/>
                    <span className='x-subtitle'>eating chocolate? yup i eat a lot</span>
                </div>
            </div>
        </div>
    )
}

export default OfflineActivity