"use client";

import { useParams } from 'next/navigation';
import { useMix } from '@/app/_lib/mix';
import Mix from './_components/mix';
import Playlist from './_components/playlist';
import Spinner from './_components/spinner';
import styles from './page.module.css';

export default function MixPage() {
    const { id } = useParams();
    const { data, error } = useMix(id);

    // Default to Spinner
    let mainContent = <Spinner />;

    // Error Messaging
    if (error) {
        mainContent = (
            <p>An error occurred while loading mix {id}</p>
        );
    }

    // Show the Mix if we have it!
    let sidebarContent = null;
    if (data) {
        mainContent = <Mix mix={data.mix} />;
        sidebarContent = <Playlist url={data.mix.playlist} />;
    }

    return (
        <div className={styles.mixpage}>
            <main className={styles.main}>{mainContent}</main>
            <div className={styles.sidebar}>{sidebarContent}</div>
        </div>
    );
}
