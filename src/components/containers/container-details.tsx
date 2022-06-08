import { BackButton } from '../back-button/back-button';
import { DislikeButton } from '../dislike-button/dislike-button';
import { Info } from '../info/Info';
import { LikeButton } from '../like-button/like-button';
import { PrisionerImage } from '../prisioner-image/prisioner-image';

export function ContainerDetails() {
    return (
        <div>
            <PrisionerImage></PrisionerImage>
            <BackButton></BackButton>
            <DislikeButton></DislikeButton>
            <LikeButton></LikeButton>
            <Info></Info>
        </div>
    );
}
