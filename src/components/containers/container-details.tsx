import { BackButton } from '../back-button/back-button';
import { PrisionerImage } from '../prisioner-image/prisioner-image';

export function ContainerDetails() {
    return (
        <div>
            <PrisionerImage></PrisionerImage>
            <BackButton></BackButton>
        </div>
    );
}
