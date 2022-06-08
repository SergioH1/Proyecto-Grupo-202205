import Auth0Login from '../components/auth/auth0login';

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
            </div>
        </>
    );
}

export default Login;
