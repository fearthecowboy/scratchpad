import { VpnSite } from './VpnSite';
/**
 * @description Result of the request to list VpnSites. It contains a list of VpnSites and a URL nextLink to get the next set of results.
 */
export interface ListVpnSitesResult {
    /**
     * @description List of VpnSites.
     */
    value: Array<VpnSite>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
