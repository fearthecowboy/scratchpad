
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
     * @description The provisioning state of the resource.
     */
    provisioningState: string;
}
