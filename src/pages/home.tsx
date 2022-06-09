import { useNavigate } from 'react-router-dom';
import { DislikeButton } from '../components/dislike-button/dislike-button';
import { InfoHome } from '../components/info-home/info-home';
import { LikeButton } from '../components/like-button/like-button';
import { NavBar } from '../components/navbar/navbar';
import { PrisionerImage } from '../components/prisioner-image/prisioner-image';
export function Home() {
    let navigate = useNavigate();
    function goToInfo() {
        navigate('/details');
    }
    return (
        <>
            <InfoHome></InfoHome>
            <div className="container-card">
                <button onClick={goToInfo}>
                    <PrisionerImage></PrisionerImage>
                </button>
                <DislikeButton></DislikeButton>
                <LikeButton></LikeButton>
            </div>
            <NavBar></NavBar>
        </>
    );
}

export default Home;
