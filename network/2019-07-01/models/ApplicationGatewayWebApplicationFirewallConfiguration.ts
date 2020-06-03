import { ApplicationGatewayFirewallMode } from '../enums/ApplicationGatewayFirewallMode';
import { ApplicationGatewayFirewallDisabledRuleGroup } from './ApplicationGatewayFirewallDisabledRuleGroup';
import { ApplicationGatewayFirewallExclusion } from './ApplicationGatewayFirewallExclusion';
/**
 * @description Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
    /**
     * @description Whether the web application firewall is enabled or not.
     */
    enabled?: boolean;
    /**
     * @description Web application firewall mode.
     */
    firewallMode?: ApplicationGatewayFirewallMode | string;
    /**
     * @description The type of the web application firewall rule set. Possible values are: 'OWASP'.
     */
    ruleSetType?: string;
    /**
     * @description The version of the rule set type.
     */
    ruleSetVersion?: string;
    /**
     * @description The disabled rule groups.
     */
    disabledRuleGroups: Array<ApplicationGatewayFirewallDisabledRuleGroup>;
    /**
     * @description Whether allow WAF to check request Body.
     */
    requestBodyCheck: boolean;
    /**
     * @description Maximum request body size for WAF.
     */
    maxRequestBodySize: int32 & Minimum<8> & Maximum<128>;
    /**
     * @description Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb: int32 & Minimum<8> & Maximum<128>;
    /**
     * @description Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb: int32 & Minimum<0>;
    /**
     * @description The exclusion list.
     */
    exclusions: Array<ApplicationGatewayFirewallExclusion>;
}
