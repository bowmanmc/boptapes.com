import Navbar from '@/app/_components/navbar';


export default function MixLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
