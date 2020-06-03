import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of a service delegation.
 */
export interface ServiceDelegationPropertiesFormat {
    /**
     * @description The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
     */
    serviceName: string;
    /**
     * @description Describes the actions permitted to the service upon delegation.
     */
    actions: Array<string>;
    /**
     * @description The provisioning state of the service delegation resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
