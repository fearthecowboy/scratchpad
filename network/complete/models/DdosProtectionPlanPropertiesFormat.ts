import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description DDoS protection plan properties.
 * @since 2019-07-01
 */
export interface DdosProtectionPlanPropertiesFormat {
    /**
     * @description The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the DDoS protection plan resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
     */
    readonly virtualNetworks: Array<SubResource>;
}
