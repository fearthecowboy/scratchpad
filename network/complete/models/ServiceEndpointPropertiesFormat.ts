import { ProvisioningState } from "../enums/ProvisioningState";

/**
 * @description The service endpoint properties.
 * @since 2017-11-01
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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
