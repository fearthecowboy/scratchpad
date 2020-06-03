import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { VirtualNetwork } from './VirtualNetwork';
/**
 * @description Properties of the load balancer backend addresses.
 * @since 2020-04-01
 */
export interface LoadBalancerBackendAddressPropertiesFormat {
    /**
     * @description Reference to an existing virtual network.
     */
    virtualNetwork: VirtualNetwork;
    /**
     * @description IP Address belonging to the referenced virtual network.
     */
    ipAddress: string;
    /**
     * @description Reference to IP address defined in network interfaces.
     */
    networkInterfaceIPConfiguration: NetworkInterfaceIPConfiguration;
}
