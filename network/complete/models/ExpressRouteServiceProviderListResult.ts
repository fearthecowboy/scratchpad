import { ExpressRouteServiceProvider } from './ExpressRouteServiceProvider';

/**
 * @description Response for the ListExpressRouteServiceProvider API service call.
 */
export interface ExpressRouteServiceProviderListResult {
    /**
     * @description A list of ExpressRouteResourceProvider resources.
     */
    value: Array<ExpressRouteServiceProvider>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
