import { InfoCharges } from '../info-charges/info-charges';
import { InfoLocation } from '../info-location/info-location';
import { InfoName } from '../info-name/info-name';

export function Info() {
    return (
        <div className="info-container">
            <InfoName></InfoName>
            <InfoLocation></InfoLocation>
            <InfoCharges></InfoCharges>
        </div>
    );
}
