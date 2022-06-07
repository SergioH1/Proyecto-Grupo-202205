import { aMenuItems } from '../../interface/menu-items';
import { Footer } from '../footer/Footer';

export function Layout({
    children,
    options,
}: {
    children: JSX.Element;
    options: aMenuItems;
}) {
    return (
        <>
            <main className="main-container">{children}</main>
            <Footer></Footer>
        </>
    );
}
