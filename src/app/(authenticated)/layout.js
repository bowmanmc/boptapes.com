"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Navbar from '@/app/_components/navbar';


export default function AuthenticatedLayout({ children }) {

    // Anything hitting this layout requires authentication. Make sure the
    // user is signed in.
    const { session } = useSession();
    if (!session) {
        // The user somehow got to an authenticated url without signing in.
        // Redirect to the home page.
        redirect("/");
    }

    console.log(`Authenticated Layout got: ${JSON.stringify(session)}`);

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
