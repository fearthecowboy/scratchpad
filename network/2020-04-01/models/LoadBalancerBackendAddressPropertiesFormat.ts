import { VirtualNetwork } from './VirtualNetwork';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
/**
 * @description Properties of the load balancer backend addresses.
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
