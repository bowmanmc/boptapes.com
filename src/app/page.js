import Header from "./_components/header.js";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>BopTapes.com</h1>
                <p>Main public page for the website</p>
            </main>
        </>
    );
}
