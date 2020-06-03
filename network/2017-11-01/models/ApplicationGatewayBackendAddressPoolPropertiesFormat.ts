import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { ApplicationGatewayBackendAddress } from './ApplicationGatewayBackendAddress';
/**
 * @description Properties of Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
    /**
     * @description Collection of references to IPs defined in network interfaces.
     */
    backendIPConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description Backend addresses
     */
    backendAddresses: Array<ApplicationGatewayBackendAddress>;
    /**
     * @description Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
