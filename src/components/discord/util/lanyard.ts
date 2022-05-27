export const createDefaultData = () => {
    return {
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