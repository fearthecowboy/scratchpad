import { SecurityPartnerProvider } from './SecurityPartnerProvider';
/**
 * @description Response for ListSecurityPartnerProviders API service call.
 */
export interface SecurityPartnerProviderListResult {
    /**
     * @description List of Security Partner Providers in a resource group.
     */
    value: Array<SecurityPartnerProvider>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
