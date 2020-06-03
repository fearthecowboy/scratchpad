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
     * @description The actions permitted to the service upon delegation.
     */
    readonly actions: Array<string>;
    /**
     * @description The provisioning state of the service delegation resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
