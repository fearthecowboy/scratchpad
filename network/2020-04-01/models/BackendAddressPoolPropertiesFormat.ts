import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { LoadBalancerBackendAddress } from './LoadBalancerBackendAddress';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the backend address pool.
 */
export interface BackendAddressPoolPropertiesFormat {
    /**
     * @description An array of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description An array of backend addresses.
     */
    loadBalancerBackendAddresses: Array<LoadBalancerBackendAddress>;
    /**
     * @description An array of references to load balancing rules that use this backend address pool.
     */
    readonly loadBalancingRules: Array<SubResource>;
    /**
     * @description A reference to an outbound rule that uses this backend address pool.
     */
    readonly outboundRule: SubResource;
    /**
     * @description An array of references to outbound rules that use this backend address pool.
     */
    readonly outboundRules: Array<SubResource>;
    /**
     * @description The provisioning state of the backend address pool resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
