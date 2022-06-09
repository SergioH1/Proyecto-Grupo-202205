import Auth0Login from '../components/auth/auth0login';
import LogoutButton from '../components/auth/auth0logout';
import './login.css';

export function Login() {
    return (
        <>
            <div className="login">
                <div className="login__welcome">
                    <h1 className="welcome--title">
                        Bienvenida/o a Prision Dates
                    </h1>
                    <p className="welcome--parrafo">
                        Por favor, inicie sesión para encontrar tu delincuente
                        perfecto
                    </p>
                </div>
                <div className="police-container">
                    <img
                        className="police-img"
                        src="./img/Poli-inicio.jpg"
                        alt="Polichia"
                    />
                </div>
                <div className="auth">
                    <Auth0Login></Auth0Login>
                    <LogoutButton></LogoutButton>
                </div>
            </div>
        </>
    );
}

export default Login;
