import React from 'react'
import Card from './Card'

const Projects = () => {
    const _titleWeight = { fontWeight: 400 }
    return (
        <div className='x-proj'>
            <div className='intro'>
                <div className='introduction-title'>
                    <h1 className='title title-weird-fix' style={_titleWeight}>Open-source, innovative projects</h1>
                    <h1 className='title'>of the best quality.</h1>
                </div>
                <p className='title-weird-fix'>more projects coming soon :)</p>
            </div>

            <br />

            <div className='projects'>
                <Card
                    name='aidak.tk'
                    link='https://github.com/aidakx/aidak.tk'
                    language='typescript'
                    description='This very website.'
                />

                <Card 
                    name='nexthub_crypto'
                    link='https://github.com/nexthubapp/nexthub_crypto'
                    language='elixir' 
                    description='NextHubCrypto is a NextHub service used to manage cryptographic operations like hashing and comparing passwords and sensible data.'
                />

                <Card 
                    name='Ocelot'
                    link='https://github.com/ocelotpkg/ocelot'
                    language='typescript' 
                    description='A modern, fast and lightweight package manager created for TypeScript. Spoiler: v2 coming soon.'
                />

                <Card
                    name='Hexagon Tests'
                    link='https://github.com/aidakx/hexagon-tests'
                    language='typescript'
                    description='The official testing unit for Hexagon, an internal multi-platform hosting.'
                />

                <Card
                    name='discordauth'
                    link='https://github.com/aidakx/discordauth'
                    language='typescript'
                    description='discordauth is an internal library that creates Discord forms and handles submissions, using the new Modals, a new feature implemented within Discord.js v14.'
                />
            </div>

            <br />

            <div className="projects">
                <Card
                    name='eska'
                    link='https://github.com/aidakx/eska'
                    language='typescript'
                    description='A simple, functional and customizable ID system that uses a new technology called Superflake (based on Twitter Snowflakes)'
                />

                <Card
                    name='rustpaste'
                    language='rust'
                    comingSoon={true}
                    description='What do you think this will be?'
                />
            </div>
        </div>
    )
}

export default Projects