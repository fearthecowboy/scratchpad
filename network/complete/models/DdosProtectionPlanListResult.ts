import { DdosProtectionPlan } from './DdosProtectionPlan';

/**
 * @description A list of DDoS protection plans.
 * @since 2019-07-01
 */
export interface DdosProtectionPlanListResult {
    /**
     * @description A list of DDoS protection plans.
     */
    value: Array<DdosProtectionPlan>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
