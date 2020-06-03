import { AutoApprovedPrivateLinkService } from './AutoApprovedPrivateLinkService';
/**
 * @description An array of private link service id that can be linked to a private end point with auto approved.
 */
export interface AutoApprovedPrivateLinkServicesResult {
    /**
     * @description An array of auto approved private link service.
     */
    value: Array<AutoApprovedPrivateLinkService>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
