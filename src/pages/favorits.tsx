import { useAuth0 } from '@auth0/auth0-react';
import { CardList } from '../components/card-favs/card-list';
import { NavBar } from '../components/navbar/navbar';

export function Favorits() {
    const { user } = useAuth0();

    return (
        <>
            <h2>MATCHES</h2>
            <CardList></CardList>
            <NavBar></NavBar>
        </>
    );
}
export default Favorits;
