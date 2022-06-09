import { CardList } from '../components/card-favs/card-list';
import { NavBar } from '../components/navbar/navbar';
import './favorites.css';

export function Favorits() {
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
