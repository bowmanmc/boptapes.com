import styles from './navbar.module.css';

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <a href="/"><img src="/logos/boptapes-dark.png" alt="Bop Tapes" /></a>
                <a href="/"><h1>Bop Tapes</h1></a>
            </div>
        </div>
    );
};
