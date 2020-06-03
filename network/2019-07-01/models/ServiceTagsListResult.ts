import { ServiceTagInformation } from './ServiceTagInformation';
/**
 * @description Response for the ListServiceTags API service call.
 */
export interface ServiceTagsListResult {
    /**
     * @description The name of the cloud.
     */
    readonly name: string ;
    /**
     * @description The ID of the cloud.
     */
    readonly id: string ;
    /**
     * @description The azure resource type.
     */
    readonly type: string ;
    /**
     * @description The iteration number.
     */
    readonly changeNumber: string ;
    /**
     * @description The name of the cloud.
     */
    readonly cloud: string ;
    /**
     * @description The list of service tag information resources.
     */
    readonly values: Array<ServiceTagInformation>;
}
