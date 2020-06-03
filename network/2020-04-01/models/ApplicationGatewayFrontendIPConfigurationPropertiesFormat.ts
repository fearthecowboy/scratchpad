import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
    /**
     * @description PrivateIPAddress of the network interface IP Configuration.
     */
    privateIPAddress: string;
    /**
     * @description The private IP address allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Reference to the subnet resource.
     */
    subnet: SubResource;
    /**
     * @description Reference to the PublicIP resource.
     */
    publicIPAddress: SubResource;
    /**
     * @description The provisioning state of the frontend IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
