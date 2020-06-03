import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { ApplicationGatewayBackendAddress } from './ApplicationGatewayBackendAddress';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
    /**
     * @description Collection of references to IPs defined in network interfaces.
     */
    readonly backendIPConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description Backend addresses.
     */
    backendAddresses: Array<ApplicationGatewayBackendAddress>;
    /**
     * @description The provisioning state of the backend address pool resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
