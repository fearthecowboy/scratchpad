import { Resource } from './Resource';
/**
 * @description Network Intent Policy resource.
 */
export interface NetworkIntentPolicy extends Resource {
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
