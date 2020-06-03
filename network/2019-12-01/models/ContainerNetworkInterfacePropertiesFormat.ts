import { ContainerNetworkInterfaceConfiguration } from './ContainerNetworkInterfaceConfiguration';
import { Container } from './Container';
import { ContainerNetworkInterfaceIpConfiguration } from './ContainerNetworkInterfaceIpConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of container network interface.
 */
export interface ContainerNetworkInterfacePropertiesFormat {
    /**
     * @description Container network interface configuration from which this container network interface is created.
     */
    readonly containerNetworkInterfaceConfiguration: ContainerNetworkInterfaceConfiguration;
    /**
     * @description Reference to the container to which this container network interface is attached.
     */
    container: Container;
    /**
     * @description Reference to the ip configuration on this container nic.
     */
    readonly ipConfigurations: Array<ContainerNetworkInterfaceIpConfiguration>;
    /**
     * @description The provisioning state of the container network interface resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
