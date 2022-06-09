import { useAuth0 } from '@auth0/auth0-react';
import { CardList } from '../components/card-favs/card-list';
import { NavBar } from '../components/navbar/navbar';
import './favorites.css';

export function Favorits() {
    const { user } = useAuth0();

    return (
        <div className="match-contaienr">
            <div className="head-container">
                <h2>MATCHES</h2>
            </div>
            <CardList></CardList>
            <NavBar></NavBar>
        </div>
    );
}
export default Favorits;
