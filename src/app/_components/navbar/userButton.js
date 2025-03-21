import styles from './userButton.module.css';

export default function UserButton({ user }) {

    return (
        <div className={styles.userButton}>
            Hello {user.name}!
        </div>
    );
};
