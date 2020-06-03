import { Subnet } from './Subnet';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description IP configuration profile properties.
 */
export interface IPConfigurationProfilePropertiesFormat {
    /**
     * @description The reference of the subnet resource to create a container network interface ip configuration.
     */
    subnet: Subnet;
    /**
     * @description The provisioning state of the IP configuration profile resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
