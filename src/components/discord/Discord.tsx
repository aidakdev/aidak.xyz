import React from 'react'

import { Laptop, MapPin, Smartphone } from 'lucide-react'

import CodeActivity from './activities/CodeActivity'
import SpotifyActivity from './activities/SpotifyActivity'
import OfflineActivity from './activities/OfflineActivity'

import { Data, useLanyard } from 'use-lanyard'
import { createDefaultData } from './util/lanyard'

const Discord = () => {
    const presence = JSON.parse(
        JSON.stringify(useLanyard('311904215272390657'))
    )

    const defaultData = createDefaultData()

    const vscFilter = x => x.type === 0 && x.name === 'Visual Studio Code'
    const data: Data = !presence.isValidating ? presence.data : defaultData

    return (
        <div className='discord-card'>
            <img className='avatar' src={
                'https://cdn.discordapp.com/avatars/'
                + data.discord_user.id + '/'
                + data.discord_user.avatar + '.png?size=4096'
            } />
            <h3>
                {data.discord_user.username}#{data.discord_user.discriminator}
            </h3>

            {data.active_on_discord_desktop && <Laptop className='online' />}
            {data.active_on_discord_mobile && <Smartphone className='online' />}

            <br/> <br/>

            <MapPin size={20}/>
            <p className='smol-text'>{data.kv.location.toUpperCase()}</p>

            {data.discord_status === 'offline' && 
                <OfflineActivity kikiLookItsMe={'https://i.pinimg.com/736x/da/e0/27/dae02754ebd147873ce88491b122f81d.jpg'} />
            }

            {data.activities.some(vscFilter) &&
                <CodeActivity activity={
                    data.activities.some(vscFilter) 
                    && data.activities.find(vscFilter)} 
                />
            }

            {data.listening_to_spotify &&
                <SpotifyActivity activity={data.listening_to_spotify && data.spotify} />
            }

        </div>
    )
}

export default Discord
