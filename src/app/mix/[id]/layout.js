import Navbar from '../../_components/navbar';

export default function MixLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
