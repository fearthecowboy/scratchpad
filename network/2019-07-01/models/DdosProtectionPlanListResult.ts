import { DdosProtectionPlan } from './DdosProtectionPlan';
/**
 * @description A list of DDoS protection plans.
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
