import { ResourceSku } from './ResourceSku';
/**
 * @description The List Resource Skus operation response.
 */
export interface ResourceSkusResult {
    /**
     * @description The list of skus available for the subscription.
     */
    value?: Array<ResourceSku>;
    /**
     * @description The URI to fetch the next page of Resource Skus. Call ListNext() with this URI to fetch the next page of Resource Skus
     */
    nextLink: string;
}
