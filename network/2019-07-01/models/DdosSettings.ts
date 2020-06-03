import { SubResource } from './SubResource';
import { DdosSettingsProtectionCoverage } from '../enums/DdosSettingsProtectionCoverage';
/**
 * @description Contains the DDoS protection settings of the public IP.
 */
export interface DdosSettings {
    /**
     * @description The DDoS custom policy associated with the public IP.
     */
    ddosCustomPolicy: SubResource;
    /**
     * @description The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
     */
    protectionCoverage: DdosSettingsProtectionCoverage | string;
}
