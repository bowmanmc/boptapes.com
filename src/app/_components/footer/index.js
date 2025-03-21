import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__header}>
                <p>Built with ❤️ for humans by humans.</p>
                <p>Handcrafted, no AI or 🤖 involved.</p>
            </div>
            <div className={styles.footer__content}>
                <div className={styles.footer__section}>
                    <Image className={styles.footer__logo} 
                        src="/logos/boptapes-light.png" 
                        alt="Bop Tapes" 
                        width={512}
                        height={345} />
                    <h1>Bop Tapes</h1>
                </div>
                <div className={styles.footer__section}>
                    
                </div>
                <div className={styles.footer__section}>
                    
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <hr />
                <p className={styles.footer__copyright}>Bop Tapes © 2025</p>
            </div>
        </footer>
    );
};
