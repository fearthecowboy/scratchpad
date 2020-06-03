import { Access } from '../enums/Access';
/**
 * @description Results of IP flow verification on the target resource.
 */
export interface VerificationIPFlowResult {
    /**
     * @description Indicates whether the traffic is allowed or denied.
     */
    access: Access | string;
    /**
     * @description Name of the rule. If input is not matched against any security rule, it is not displayed.
     */
    ruleName: string;
}
