import { EffectiveNetworkSecurityGroup } from './EffectiveNetworkSecurityGroup';

/**
 * @description Response for list effective network security groups API service call.
 */
export interface EffectiveNetworkSecurityGroupListResult {
    /**
     * @description A list of effective network security groups.
     */
    value: Array<EffectiveNetworkSecurityGroup>;
    /**
     * @description The URL to get the next set of results.
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly nextLink: string;
}
