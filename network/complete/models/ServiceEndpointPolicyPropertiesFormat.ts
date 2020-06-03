import { ProvisioningState } from '../enums/ProvisioningState';
import { ServiceEndpointPolicyDefinition } from './ServiceEndpointPolicyDefinition';
import { Subnet } from './Subnet';

/**
 * @description Service Endpoint Policy resource.
 * @since 2019-07-01
 */
export interface ServiceEndpointPolicyPropertiesFormat {
    /**
     * @description A collection of service endpoint policy definitions of the service endpoint policy.
     */
    serviceEndpointPolicyDefinitions: Array<ServiceEndpointPolicyDefinition>;
    /**
     * @description A collection of references to subnets.
     */
    readonly subnets: Array<Subnet>;
    /**
     * @description The resource GUID property of the service endpoint policy resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the service endpoint policy resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
