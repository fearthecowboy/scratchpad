import { ApplicationGatewayFirewallMode } from '../enums/ApplicationGatewayFirewallMode';
import { ApplicationGatewayFirewallDisabledRuleGroup } from "./ApplicationGatewayFirewallDisabledRuleGroup";
import { ApplicationGatewayFirewallExclusion } from "./ApplicationGatewayFirewallExclusion";

/**
 * @description Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
    /**
     * @description Whether the web application firewall is enabled.
     */
    enabled?: boolean;
    /**
     * @description Web application firewall mode. Possible values are: 'Detection' and 'Prevention'.
     * @Optional  '2017-11-01' - made property optional
     */
    firewallMode?: ApplicationGatewayFirewallMode | string;
    /** @description The type of the web application firewall rule set. Possible values are: 'OWASP'.
     * @since 2017-11-01
     */
    ruleSetType?: string;
    /** @description The version of the rule set type.
     * @since 2017-11-01
     */
    ruleSetVersion?: string;
    /** @description The disabled rule groups.
     * @since 2017-11-01
     */
    disabledRuleGroups: Array<ApplicationGatewayFirewallDisabledRuleGroup>;
    /** @description Whether allow WAF to check request Body.
     * @since 2019-07-01
     */
    requestBodyCheck: boolean;
    /** @description Maximum request body size for WAF.
     * @since 2019-07-01
     */
    maxRequestBodySize: int32 & Minimum<8> & Maximum<128>;
    /** @description Maximum request body size in Kb for WAF.
     * @since 2019-07-01
     */
    maxRequestBodySizeInKb: int32 & Minimum<8> & Maximum<128>;
    /** @description Maximum file upload size in Mb for WAF.
     * @since 2019-07-01
     */
    fileUploadLimitInMb: int32 & Minimum<0>;
    /** @description The exclusion list.
     * @since 2019-07-01
     */
    exclusions: Array<ApplicationGatewayFirewallExclusion>;
}
