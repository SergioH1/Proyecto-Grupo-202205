import { useAuth0 } from '@auth0/auth0-react';
function Auth0Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="login-button" onClick={loginWithRedirect}>
            Log In
        </button>
    );
}

export default Auth0Login;
