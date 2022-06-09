import { Footer } from '../footer/Footer';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <main className="main-container">{children}</main>
            <Footer></Footer>
        </>
    );
}
