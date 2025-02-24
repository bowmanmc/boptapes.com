import styles from './page.module.css';

export default function Mix() {
    return (
        <main>
            <h1>Top Five B-52 Songs</h1>
            <div className={styles.dedication}>
                <p>Dedicated to Lobsters and Crabs and Crustaceans around the world.</p>
            </div>
            <p>
                Did you know that the B-52s were John Lennon's favorite band?
                It's true! 
            </p>
        </main>
    );
}
