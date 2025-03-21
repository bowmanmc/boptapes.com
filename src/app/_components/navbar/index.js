"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';

import SignInButton from './signinButton';
import styles from './navbar.module.css';
import UserButton from './userButton';

export default function Navbar() {

    let accountArea = <SignInButton />;
    const { data: session } = useSession();

    if (session) {
        accountArea = <UserButton user={session.user} />;
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <a href="/"><Image src="/logos/boptapes-dark.png" 
                    alt="Bop Tapes"
                    width={512}
                    height={345} 
                    /></a>
                <a href="/"><h1>Bop Tapes</h1></a>
            </div>
            <div className={styles.navbar__user}>{accountArea}</div>
        </div>
    );
};
