import { SecurityRule } from './SecurityRule';
/**
 * @description Response for ListSecurityRule API service call. Retrieves all security rules that belongs to a network security group.
 */
export interface SecurityRuleListResult {
    /**
     * @description The security rules in a network security group.
     */
    value: Array<SecurityRule>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
