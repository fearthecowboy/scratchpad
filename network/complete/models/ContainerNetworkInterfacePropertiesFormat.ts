import { ProvisioningState } from '../enums/ProvisioningState';
import { Container } from './Container';
import { ContainerNetworkInterfaceConfiguration } from './ContainerNetworkInterfaceConfiguration';
import { ContainerNetworkInterfaceIpConfiguration } from './ContainerNetworkInterfaceIpConfiguration';

/**
 * @description Properties of container network interface.
 * @since 2019-07-01
 */
export interface ContainerNetworkInterfacePropertiesFormat {
    /**
     * @description Container network interface configuration from which this container network interface is created.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly containerNetworkInterfaceConfiguration: ContainerNetworkInterfaceConfiguration;
    /**
     * @description Reference to the container to which this container network interface is attached.
     */
    container: Container;
    /**
     * @description Reference to the ip configuration on this container nic.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly ipConfigurations: Array<ContainerNetworkInterfaceIpConfiguration>;
    /**
     * @description The provisioning state of the container network interface resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
