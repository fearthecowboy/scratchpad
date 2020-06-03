import { VpnSiteLink } from './VpnSiteLink';
/**
 * @description Result of the request to list VpnSiteLinks. It contains a list of VpnSiteLinks and a URL nextLink to get the next set of results.
 */
export interface ListVpnSiteLinksResult {
    /**
     * @description List of VpnSitesLinks.
     */
    value: Array<VpnSiteLink>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
