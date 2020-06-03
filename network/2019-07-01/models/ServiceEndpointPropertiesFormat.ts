import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description The service endpoint properties.
 */
export interface ServiceEndpointPropertiesFormat {
    /**
     * @description The type of the endpoint service.
     */
    service: string;
    /**
     * @description A list of locations.
     */
    locations: Array<string>;
    /**
     * @description The provisioning state of the service endpoint resource.
     */
    provisioningState: ProvisioningState | string;
}
