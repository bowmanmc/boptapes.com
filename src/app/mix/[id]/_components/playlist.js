import PlaylistApple from './playlistApple';
import PlaylistSpotify from './playlistSpotify';
import { getPlaylistType } from './playlistutils';

import styles from './playlist.module.css';

export default function Playlist({ url }) {

    if (!url) {
        return null;
    }

    let playlistPreview = null;
    const playlistType = getPlaylistType(url);

    if (playlistType === 'spotify') {
        playlistPreview = <PlaylistSpotify url={url} />;
    }
    else if (playlistType === 'apple') {
        playlistPreview = <PlaylistApple url={url} />;
    }
    // else it stays null/empty

    return (
        <div className={styles.playlist}>
            {playlistPreview}

            <div className={styles.playlistLink}>
                <p>
                    Having problems with the embedded playlist above? You 
                    can <a target="_blank" href={url}>Click Here</a> to launch
                    the playlist in a new window! 🤘
                </p>
            </div>
        </div>
    );
}
