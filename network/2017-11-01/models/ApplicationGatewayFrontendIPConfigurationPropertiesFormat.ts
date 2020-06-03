import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { SubResource } from './SubResource';
/**
 * @description Properties of Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
    /**
     * @description PrivateIPAddress of the network interface IP Configuration.
     */
    privateIPAddress: string;
    /**
     * @description PrivateIP allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Reference of the subnet resource.
     */
    subnet: SubResource;
    /**
     * @description Reference of the PublicIP resource.
     */
    publicIPAddress: SubResource;
    /**
     * @description Provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
