import { VirtualRouter } from './VirtualRouter';
/**
 * @description Response for ListVirtualRouters API service call.
 */
export interface VirtualRouterListResult {
    /**
     * @description List of Virtual Routers.
     */
    value: Array<VirtualRouter>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
