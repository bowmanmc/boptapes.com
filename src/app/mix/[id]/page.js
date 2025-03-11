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
                </p>
                <p>
                    They formed as "the B-52's" in 1976 when Cindy Wilson, Ricky Wilson (her elder brother), Pierson, 
                    Strickland, and cowbell player, poet, and lead vocalist Schneider held an impromptu jam session 
                    after sharing a flaming volcano drink at a Chinese restaurant in Athens, Georgia. When they first 
                    jammed, Strickland played guitar and Ricky Wilson played congas. They later played their first 
                    concert (with Wilson on guitar) in 1977 at a Valentine's Day party for their friends.
                </p>
                <p>
                    The name "B-52's" comes from a particular beehive hairdo resembling the nose cone of the aircraft, 
                    which Pierson and Cindy Wilson wore in performances during the band's first decade. Other names 
                    the band considered were the Tina-Trons and Fellini's Children. Strickland suggested the name 
                    after a dream he had of a band performing in a hotel lounge. In the dream, he heard someone whisper 
                    in his ear that the band's name was "the B-52's".
                </p>
            </main>
            <div className={styles.sidebar}>
                <Playlist url={playlistUrl} />
            </div>
        </div>
    );
}
