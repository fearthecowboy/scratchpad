import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description Properties of the container network interface IP configuration.
 * @since 2019-07-01
 */
export interface ContainerNetworkInterfaceIpConfigurationPropertiesFormat {
    /**
     * @description The provisioning state of the container network interface IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
