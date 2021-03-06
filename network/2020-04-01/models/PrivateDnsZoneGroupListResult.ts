import { PrivateDnsZoneGroup } from './PrivateDnsZoneGroup';
/**
 * @description Response for the ListPrivateDnsZoneGroups API service call.
 */
export interface PrivateDnsZoneGroupListResult {
    /**
     * @description A list of private dns zone group resources in a private endpoint.
     */
    value: Array<PrivateDnsZoneGroup>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
