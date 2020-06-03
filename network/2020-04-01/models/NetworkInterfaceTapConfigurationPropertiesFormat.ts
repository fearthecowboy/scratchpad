import { VirtualNetworkTap } from './VirtualNetworkTap';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Virtual Network Tap configuration.
 */
export interface NetworkInterfaceTapConfigurationPropertiesFormat {
    /**
     * @description The reference to the Virtual Network Tap resource.
     */
    virtualNetworkTap: VirtualNetworkTap;
    /**
     * @description The provisioning state of the network interface tap configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
