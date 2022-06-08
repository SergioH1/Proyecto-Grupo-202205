import { IconNavBar } from './icon-navbar';
import { ProfileUser } from './profile-user';

export function NavBar() {
    let template = (
        <div className="container-nav">
            <ul className="nav">
                <li key="home-page">
                    <img
                        role="button"
                        className="nav__icon-home"
                        src="./svg/home.svg"
                        alt="icon home"
                    />
                </li>
                <IconNavBar></IconNavBar>
                <ProfileUser></ProfileUser>
            </ul>
        </div>
    );

    return template;
}
