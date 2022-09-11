import React from 'react'

const ImportantNotice = () => {
    const _titleWeight = { fontWeight: 400 }

    return (
        <div className='intro'>
            <div className='introduction-title'>
                <h1 className='title title-weird-fix' style={{color: 'red'}}>
                    Last-minute important notice.
                </h1>
            </div>

            <p className='title-weird-fix' style={{maxWidth: '700px'}}>
                Aidak initially joined Discord on February 26, 2016.
                From that year to 2021, Aidak led a creative period of high quality and innovative products. 
                At the end of 2021, different events occurred, and as time has passed this decision made more and more sense.
                
                <br /> <br />

                As of September 10, 2022, Aidak permanently unlinks from Discord. He will keep all his accounts, servers and services that he has registered and developed within this platform.
                He will always remember all the people who have been there to support him, who have helped his projects grow and have allowed Aidak to create one of the best technological empires within Discord. 
                In particular, he will fondly remember that friend who was like his brother and, in fact, is.

                <br /> <br />

                Visits will take place on three different dates over the next three months, as a measure to protect Aidak's legacy.
                You can still contact Aidak via email hello@aidak.xyz or via his Twitter account, @helloaidak.
            </p>
        </div>
    )
}

export default ImportantNotice