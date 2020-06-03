import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of IP configuration of an application gateway.
 */
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
    /**
     * @description Reference of the subnet resource. A subnet from where application gateway gets its private address.
     */
    subnet: SubResource;
    /**
     * @description The provisioning state of the application gateway IP configuration resource.
     */
    provisioningState: ProvisioningState | string;
}
