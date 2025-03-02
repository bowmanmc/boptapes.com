import Playlist from './_components/playlist';
import styles from './page.module.css';

export default function Mix() {

    const playlistUrl = "https://open.spotify.com/playlist/3Xmv0MfKpt5R3yZsLJztTL?si=ef008f8677554b73";
    // const playlistUrl = "https://music.apple.com/us/playlist/taste-of-the-b-52s/pl.u-EdAVz8bFY5BA0";

    return (
        <div className={styles.mixpage}>
            <main className={styles.main}>
                <h1>Top Five Songs by The B-52's</h1>
                <div className={styles.dedication}>
                    <p>Dedicated to Rock Lobsters and Crabs and Crustaceans around the world.</p>
                </div>
                <p>
                    Did you know that the B-52s were John Lennon's favorite band?
                    It's true! Formed in 1976 in Athens, Georgia, the B-52s are a
                    New Wave band that has been making music for over 40 years.
                </p>
                <p>
                    Their music is fun, catchy, and most of all, danceable.
                </p>
            </main>
            <div className={styles.sidebar}>
                <Playlist url={playlistUrl} />
            </div>
        </div>
    );
}
