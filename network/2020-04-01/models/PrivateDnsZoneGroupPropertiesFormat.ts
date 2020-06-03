import { ProvisioningState } from '../enums/ProvisioningState';
import { PrivateDnsZoneConfig } from './PrivateDnsZoneConfig';
/**
 * @description Properties of the private dns zone group.
 */
export interface PrivateDnsZoneGroupPropertiesFormat {
    /**
     * @description The provisioning state of the private dns zone group resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description A collection of private dns zone configurations of the private dns zone group.
     */
    privateDnsZoneConfigs: Array<PrivateDnsZoneConfig>;
}
