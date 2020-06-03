import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayBackendAddress } from './ApplicationGatewayBackendAddress';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';

/**
 * @description Properties of Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
    /**
     * @description Collection of references to IPs defined in network interfaces.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly backendIPConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description Backend addresses
     */
    backendAddresses: Array<ApplicationGatewayBackendAddress>;
    /**
     * @description Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
