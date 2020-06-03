import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { ProvisioningState } from "../enums/ProvisioningState";
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
     * @description PrivateIP allocation method. Possible values are: 'Static' and 'Dynamic'.
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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
