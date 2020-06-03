import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Service Endpoint policy definition resource.
 */
export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
    /**
     * @description A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * @description Service endpoint name.
     */
    service: string;
    /**
     * @description A list of service resources.
     */
    serviceResources: Array<string>;
    /**
     * @description The provisioning state of the service endpoint policy definition resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
