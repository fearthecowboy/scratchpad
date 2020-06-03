import { WebApplicationFirewallEnabledState } from '../enums/WebApplicationFirewallEnabledState';
import { WebApplicationFirewallMode } from '../enums/WebApplicationFirewallMode';

/**
 * @description Defines contents of a web application firewall global configuration.
 * @since 2019-07-01
 */
export interface PolicySettings {
    /**
     * @description Describes if the policy is in enabled state or disabled state.
     * @deleted 2019-12-01
     */
    enabledState: WebApplicationFirewallEnabledState | string;
    /**
     * @description Describes if it is in detection mode or prevention mode at policy level.
     */
    mode: WebApplicationFirewallMode | string;
    /** @description The state of the policy.
     * @since 2019-12-01
     */
    state: WebApplicationFirewallEnabledState | string;
    /** @description Whether to allow WAF to check request Body.
     * @since 2019-12-01
     */
    requestBodyCheck: boolean;
    /** @description Maximum request body size in Kb for WAF.
     * @since 2019-12-01
     */
    maxRequestBodySizeInKb: int32 & Minimum<8> & Maximum<128>;
    /** @description Maximum file upload size in Mb for WAF.
     * @since 2019-12-01
     */
    fileUploadLimitInMb: int32 & Minimum<0>;
}
