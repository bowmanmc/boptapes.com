import Providers from "./providers";
import Footer from './_components/footer';
import { Fugaz_One } from 'next/font/google';
import './theme.css';
import './globals.css';

const fugazOne = Fugaz_One({
    variable: '--font-fugaz-one',
    weight: '400',
    subsets: ["latin"],
});

export const metadata = {
    title: "Bop Tapes",
    description: "Create and share mix tapes with your friends.",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${fugazOne.variable}`}>
                <Providers>
                    {children}
                </Providers>
                <Footer />
            </body>
        </html>
    );
}
