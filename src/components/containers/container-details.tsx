import { BackButton } from '../back-button/back-button';
import { DislikeButton } from '../dislike-button/dislike-button';
import { Info } from '../info/Info';
import { LikeButton } from '../like-button/like-button';

import { PrisionerImage } from '../prisioner-image/prisioner-image';

export function ContainerDetails() {
    return (
        <div>
            <div className="container-prisioner">
                <a href="./favorites">
                    <PrisionerImage></PrisionerImage>
                </a>
            </div>

            <ul className="container-details-buttons">
                <li key="back">
                    <BackButton></BackButton>
                </li>
                <li key="dislike">
                    <DislikeButton></DislikeButton>
                </li>

                <li key="like">
                    <LikeButton></LikeButton>
                </li>
            </ul>

            <Info></Info>
        </div>
    );
}
