export interface Lanyard {
    data: Data
    success: boolean
}

export interface Data {
    kv: Kv
    spotify: Spotify
    discord_status: string
    activities: Activity[]
    discord_user: DiscordUser
    listening_to_spotify: boolean
    active_on_discord_web: boolean
    active_on_discord_mobile: boolean
    active_on_discord_desktop: boolean
}

export interface Activity {
    id: string
    type: number
    name: string
    emoji?: Emoji
    party?: Party
    state?: string
    flags?: number
    assets?: Assets
    sync_id?: string
    details?: string
    created_at: number
    session_id?: string
    timestamps?: Timestamps
    application_id?: string
}

export interface Assets {
    large_text: string
    large_image: string
    small_text?: string
    small_image?: string
}

export interface Emoji {
    id: string
    name: string
    animated: boolean
}

export interface Party {
    id: string
}

export interface Timestamps {
    end?: number
    start: number
}

export interface DiscordUser {
    id: string
    avatar: string
    username: string
    public_flags: number
    discriminator: string
}

export interface Kv {
    location: string
}

export interface Spotify {
    song: string
    album: string
    artist: string
    track_id: string
    album_art_url: string
    timestamps: Timestamps
}


export const createDefaultData = (): Lanyard => {
    return {
        success: true,
        data: {
            spotify: {
                song: '',
                album: '',
                artist: '',
                track_id: '',
                album_art_url: '',
                timestamps: {
                    start: 0,
                    end: 0
                }
            },
            listening_to_spotify: true,
            kv: {
                location: ''
            },
            discord_user: {
                id: '',
                username: '',
                avatar: '',
                public_flags: 0,
                discriminator: '',
            },
            discord_status: 'offline',
            activities: [],
            active_on_discord_web: false,
            active_on_discord_mobile: false,
            active_on_discord_desktop: false
        }
    }
}