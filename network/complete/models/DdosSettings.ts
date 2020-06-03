import { DdosSettingsProtectionCoverage } from '../enums/DdosSettingsProtectionCoverage';
import { SubResource } from './SubResource';

/**
 * @description Contains the DDoS protection settings of the public IP.
 * @since 2019-07-01
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
    /** @description Enables DDoS protection on the public IP.
     * @since 2019-12-01
     */
    protectedIP: boolean;
}
