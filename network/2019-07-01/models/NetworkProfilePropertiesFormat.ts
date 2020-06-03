import { ContainerNetworkInterface } from './ContainerNetworkInterface';
import { ContainerNetworkInterfaceConfiguration } from './ContainerNetworkInterfaceConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Network profile properties.
 */
export interface NetworkProfilePropertiesFormat {
    /**
     * @description List of child container network interfaces.
     */
    containerNetworkInterfaces: Array<ContainerNetworkInterface>;
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
