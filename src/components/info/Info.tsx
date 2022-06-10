import { InfoCharges } from '../info-charges/info-charges';
import { InfoLocation } from '../info-location/info-location';
import { InfoName } from '../info-name/info-name';
import { InfoPrisioner } from '../info-prisioner/info-prisioner';

export function Info() {
    return (
        <div className="info-container">
            <InfoName></InfoName>
            <div className="info-container__line"></div>
            <InfoLocation></InfoLocation>
            <div className="info-container__line"></div>
            <InfoCharges></InfoCharges>
            <div className="info-container__line"></div>
            <InfoPrisioner></InfoPrisioner>
        </div>
    );
}
