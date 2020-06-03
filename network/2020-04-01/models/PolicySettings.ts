import { WebApplicationFirewallEnabledState } from '../enums/WebApplicationFirewallEnabledState';
import { WebApplicationFirewallMode } from '../enums/WebApplicationFirewallMode';
/**
 * @description Defines contents of a web application firewall global configuration.
 */
export interface PolicySettings {
    /**
     * @description The state of the policy.
     */
    state: WebApplicationFirewallEnabledState | string;
    /**
     * @description The mode of the policy.
     */
    mode: WebApplicationFirewallMode | string;
    /**
     * @description Whether to allow WAF to check request Body.
     */
    requestBodyCheck: boolean;
    /**
     * @description Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb: int32 & Minimum<8> & Maximum<128>;
    /**
     * @description Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb: int32 & Minimum<0>;
}
