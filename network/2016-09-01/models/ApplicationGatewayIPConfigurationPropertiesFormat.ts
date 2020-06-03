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
     */
    provisioningState: string;
}
