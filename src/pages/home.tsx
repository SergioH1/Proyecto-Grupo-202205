import { useNavigate } from 'react-router-dom';
import { DislikeButton } from '../components/dislike-button/dislike-button';
import { InfoHome } from '../components/info-home/info-home';
import { LikeButton } from '../components/like-button/like-button';
import { NavBar } from '../components/navbar/navbar';
import { PrisionerImage } from '../components/prisioner-image/prisioner-image';
import './home.css';

export function Home() {
    let navigate = useNavigate();
    function goToInfo() {
        navigate('/details');
    }
    return (
        <>
            <InfoHome></InfoHome>
            <div className="container-card">
                <div className="image-prisioner-container">
                    <button className="button-image" onClick={goToInfo}>
                        <PrisionerImage></PrisionerImage>
                    </button>
                </div>
                <div className="container-buttons">
                    <DislikeButton></DislikeButton>
                    <LikeButton></LikeButton>
                </div>
            </div>
            <NavBar></NavBar>
        </>
    );
}

export default Home;
