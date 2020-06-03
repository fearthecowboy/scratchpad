import { Probe } from './Probe';
/**
 * @description Response for ListProbe API service call.
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
