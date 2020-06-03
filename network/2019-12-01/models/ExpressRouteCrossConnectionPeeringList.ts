import { ExpressRouteCrossConnectionPeering } from './ExpressRouteCrossConnectionPeering';
/**
 * @description Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection.
 */
export interface ExpressRouteCrossConnectionPeeringList {
    /**
     * @description The peerings in an express route cross connection.
     */
    value: Array<ExpressRouteCrossConnectionPeering>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
