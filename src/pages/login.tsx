import Auth0Login from '../components/auth/auth0login';
import LogoutButton from '../components/auth/auth0logout';

export function Login() {
    return (
        <>
            <div className="login">
                <h1 className="login--title">Prision Dates</h1>
                <img
                    className="login--img"
                    src="./img/Poli-inicio.jpg"
                    alt=""
                />
                <Auth0Login></Auth0Login>
                <LogoutButton></LogoutButton>
            </div>
        </>
    );
}

export default Login;
