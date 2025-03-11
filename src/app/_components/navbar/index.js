import styles from './navbar.module.css';

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img src="/logos/boptapes-dark.png" alt="Bop Tapes" />
                <h1>Bop Tapes</h1>
            </div>
        </div>
    );
};
