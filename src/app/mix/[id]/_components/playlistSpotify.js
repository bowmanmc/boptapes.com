import { getEmbedUrl } from './playlistutils';
import styles from './playlist.module.css';

export default function PlaylistSpotify({ url }) {
    const spotifyStyles = {
        borderRadius: '12px',
    };

    const embedUrl = getEmbedUrl(url);

    return (
        <div className={styles.playlist}>
            <iframe
                style={spotifyStyles}
                src={embedUrl}
                width="100%"
                height="352" 
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </div>
    );
}
