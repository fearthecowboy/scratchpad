import { ProvisioningState } from "../enums/ProvisioningState";
import { SubResource } from './SubResource';

/**
 * @description Properties of IP configuration of an application gateway.
 */
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
    /**
     * @description Reference of the subnet resource. A subnet from where application gateway gets its private address.
     */
    subnet: SubResource;
    /**
     * @description Provisioning state of the application gateway subnet resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
