import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { SubResource } from './SubResource';
/**
 * @description Properties of the backend address pool.
 */
export interface BackendAddressPoolPropertiesFormat {
    /**
     * @description Gets collection of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description Gets load balancing rules that use this backend address pool.
     */
    readonly loadBalancingRules: Array<SubResource>;
    /**
     * @description Gets outbound rules that use this backend address pool.
     */
    readonly outboundNatRule: SubResource;
    /**
     * @description Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
