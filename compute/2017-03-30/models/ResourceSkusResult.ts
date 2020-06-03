import { ResourceSku } from './ResourceSku';
/**
 * @description The Compute List Skus operation response.
 */
export interface ResourceSkusResult {
    /**
     * @description The list of skus available for the subscription.
     */
    value?: Array<ResourceSku>;
    /**
     * @description The uri to fetch the next page of Compute Skus. Call ListNext() with this to fetch the next page of VMSS Skus.
     */
    nextLink: string;
}
