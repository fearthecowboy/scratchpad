import { IPConfigurationProfile } from './IPConfigurationProfile';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Container network interface configuration properties.
 */
export interface ContainerNetworkInterfaceConfigurationPropertiesFormat {
    /**
     * @description A list of ip configurations of the container network interface configuration.
     */
    ipConfigurations: Array<IPConfigurationProfile>;
    /**
     * @description A list of container network interfaces created from this container network interface configuration.
     */
    containerNetworkInterfaces: Array<SubResource>;
    /**
     * @description The provisioning state of the container network interface configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
