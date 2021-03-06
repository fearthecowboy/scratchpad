import { ProvisioningState } from '../enums/ProvisioningState';
import { FrontendIPConfiguration } from './FrontendIPConfiguration';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { NetworkInterfaceTapConfiguration } from './NetworkInterfaceTapConfiguration';

/**
 * @description Virtual Network Tap properties.
 * @since 2019-07-01
 */
export interface VirtualNetworkTapPropertiesFormat {
    /**
     * @description Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    readonly networkInterfaceTapConfigurations: Array<NetworkInterfaceTapConfiguration>;
    /**
     * @description The resource GUID property of the virtual network tap resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the virtual network tap resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The reference to the private IP Address of the collector nic that will receive the tap.
     */
    destinationNetworkInterfaceIPConfiguration: NetworkInterfaceIPConfiguration;
    /**
     * @description The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    destinationLoadBalancerFrontEndIPConfiguration: FrontendIPConfiguration;
    /**
     * @description The VXLAN destination port that will receive the tapped traffic.
     */
    destinationPort: int64;
}
