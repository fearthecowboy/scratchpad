import { VirtualRouter } from './VirtualRouter';

/**
 * @description Response for ListVirtualRouters API service call.
 * @since 2019-07-01
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
