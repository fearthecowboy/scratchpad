import { ProvisioningState } from "../enums/ProvisioningState";

/**
 * @description Application security group properties.
 * @since 2017-11-01
 */
export interface ApplicationSecurityGroupPropertiesFormat {
    /**
     * @description The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
}
