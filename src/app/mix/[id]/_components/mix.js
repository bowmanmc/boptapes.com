import styles from './mix.module.css';

export default function Mix({ mix }) {
    if (!mix) { 
        return null;
    }

    return (
        <>
            <h1>{mix.title}</h1>
            <div className={styles.dedication}>{mix.dedication}</div>
            {mix.content}
        </>
    );
}
