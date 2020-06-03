import { ProvisioningState } from '../enums/ProvisioningState';
import { Subnet } from './Subnet';

/**
 * @description IP configuration profile properties.
 * @since 2019-07-01
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
