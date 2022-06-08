import { IconNavBar } from './icon-navbar';

export function NavBar() {
    let template = (
        <div className="container-nav">
            <ul className="nav">
                <li key="home-page">
                    <img
                        role="button"
                        className="nav__icon-home"
                        src=""
                        alt="icon home"
                    />
                </li>
                <IconNavBar></IconNavBar>
            </ul>
        </div>
    );

    return template;
}
