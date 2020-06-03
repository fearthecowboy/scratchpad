import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description Properties of IP configuration of an Bastion Host.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Private IP allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
}
