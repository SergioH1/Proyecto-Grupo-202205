import { useAuth0 } from '@auth0/auth0-react';
import { CardList } from '../components/card-favs/card-list';

export function Favorits() {
    const { user } = useAuth0();
    console.log(user);

    return (
        <>
            <h2>MATCHES</h2>
            <CardList></CardList>
        </>
    );
}
export default Favorits;
