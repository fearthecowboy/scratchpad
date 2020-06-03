import { ProvisioningState } from "../enums/ProvisioningState";
import { LoadBalancerBackendAddress } from "./LoadBalancerBackendAddress";
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
     * @deleted 2019-07-01
     */
    readonly outboundNatRule: SubResource;
    /**
     * @description Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description A reference to an outbound rule that uses this backend address pool.
     * @since 2019-07-01
     */
    readonly outboundRule: SubResource;
    /** @description An array of references to outbound rules that use this backend address pool.
     * @since 2019-07-01
     */
    readonly outboundRules: Array<SubResource>;
    /** @description An array of backend addresses.
     * @since 2020-04-01
     */
    loadBalancerBackendAddresses: Array<LoadBalancerBackendAddress>;
}
