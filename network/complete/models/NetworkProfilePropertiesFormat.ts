import { ProvisioningState } from '../enums/ProvisioningState';
import { ContainerNetworkInterface } from './ContainerNetworkInterface';
import { ContainerNetworkInterfaceConfiguration } from './ContainerNetworkInterfaceConfiguration';

/**
 * @description Network profile properties.
 * @since 2019-07-01
 */
export interface NetworkProfilePropertiesFormat {
    /**
     * @description List of child container network interfaces.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly containerNetworkInterfaces: Array<ContainerNetworkInterface>;
    /**
     * @description List of chid container network interface configurations.
     */
    containerNetworkInterfaceConfigurations: Array<ContainerNetworkInterfaceConfiguration>;
    /**
     * @description The resource GUID property of the network profile resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the network profile resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
