import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Application security group properties.
 */
export interface ApplicationSecurityGroupPropertiesFormat {
    /**
     * @description The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the application security group resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
