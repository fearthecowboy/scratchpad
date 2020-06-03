import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description The IpGroups property information.
 * @since 2019-12-01
 */
export interface IpGroupPropertiesFormat {
    /**
     * @description The provisioning state of the IpGroups resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description IpAddresses/IpAddressPrefixes in the IpGroups resource.
     */
    ipAddresses: Array<string>;
    /**
     * @description List of references to Azure resources that this IpGroups is associated with.
     */
    readonly firewalls: Array<SubResource>;
}
