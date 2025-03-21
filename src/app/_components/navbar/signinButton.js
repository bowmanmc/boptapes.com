import { signIn } from "next-auth/react";

import styles from './signinButton.module.css';

export default function SignInButton() {

    return (
        <button className={styles.signinButton} onClick={() => {signIn()}}>
            Sign In
        </button>
    );
};
