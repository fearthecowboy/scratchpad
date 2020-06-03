import { ApplicationSecurityGroup } from './ApplicationSecurityGroup';

/**
 * @description A list of application security groups.
 * @since 2017-11-01
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
