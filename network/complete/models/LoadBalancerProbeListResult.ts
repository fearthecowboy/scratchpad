import { Probe } from './Probe';

/**
 * @description Response for ListProbe API service call.
 * @since 2017-11-01
 */
export interface LoadBalancerProbeListResult {
    /**
     * @description A list of probes in a load balancer.
     */
    value: Array<Probe>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
