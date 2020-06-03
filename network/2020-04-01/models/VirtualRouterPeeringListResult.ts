import { VirtualRouterPeering } from './VirtualRouterPeering';
/**
 * @description Response for ListVirtualRouterPeerings API service call.
 */
export interface VirtualRouterPeeringListResult {
    /**
     * @description List of VirtualRouterPeerings in a VirtualRouter.
     */
    value: Array<VirtualRouterPeering>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
