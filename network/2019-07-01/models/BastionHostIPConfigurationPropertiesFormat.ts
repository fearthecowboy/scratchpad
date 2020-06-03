import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
import { IPAllocationMethod } from '../enums/IPAllocationMethod';
/**
 * @description Properties of IP configuration of an Bastion Host.
 */
export interface BastionHostIPConfigurationPropertiesFormat {
    /**
     * @description Reference of the subnet resource.
     */
    subnet?: SubResource;
    /**
     * @description Reference of the PublicIP resource.
     */
    publicIPAddress?: SubResource;
    /**
     * @description The provisioning state of the bastion host IP configuration resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description Private IP allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
}
