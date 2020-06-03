import { ApplicationSecurityGroup } from './ApplicationSecurityGroup';
/**
 * @description A list of application security groups.
 */
export interface ApplicationSecurityGroupListResult {
    /**
     * @description A list of application security groups.
     */
    value: Array<ApplicationSecurityGroup>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
