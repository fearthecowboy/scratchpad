import { AvailablePrivateEndpointType } from './AvailablePrivateEndpointType';
/**
 * @description An array of available PrivateEndpoint types.
 */
export interface AvailablePrivateEndpointTypesResult {
    /**
     * @description An array of available privateEndpoint type.
     */
    value: Array<AvailablePrivateEndpointType>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
