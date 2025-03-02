import { getEmbedUrl } from './playlistutils';
import styles from './playlist.module.css';

export default function PlaylistApple({ url }) {
    const appleStyles = {
        borderRadius: '12px',
        width:'100%',
        maxWidth:'660px',
        overflow:'hidden',
        background:'transparent'
    };

    const embedUrl = getEmbedUrl(url);

    return (
        <div className={styles.playlist}>
            <iframe
                allow="autoplay *; encrypted-media *;"
                frameBorder="0"
                height="450"
                style={appleStyles}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={embedUrl}
            />
        </div>
    );
}
