import { ProvisioningState } from '../enums/ProvisioningState';
import { VirtualNetworkTap } from './VirtualNetworkTap';

/**
 * @description Properties of Virtual Network Tap configuration.
 * @since 2019-07-01
 */
export interface NetworkInterfaceTapConfigurationPropertiesFormat {
    /**
     * @description The reference of the Virtual Network Tap resource.
     */
    virtualNetworkTap: VirtualNetworkTap;
    /**
     * @description The provisioning state of the network interface tap configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
