import { DislikeButton } from '../components/dislike-button/dislike-button';
import { InfoHome } from '../components/info-home/info-home';
import { LikeButton } from '../components/like-button/like-button';
import { NavBar } from '../components/navbar/navbar';
import { PrisionerImage } from '../components/prisioner-image/prisioner-image';
export function Home() {
    return (
        <>
            <InfoHome></InfoHome>
            <div className="container-card">
                <a href="./details">
                    <PrisionerImage></PrisionerImage>
                </a>

                <DislikeButton></DislikeButton>
                <LikeButton></LikeButton>
            </div>
            <NavBar></NavBar>
        </>
    );
}

export default Home;
