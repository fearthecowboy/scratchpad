import { WebApplicationFirewallEnabledState } from '../enums/WebApplicationFirewallEnabledState';
import { WebApplicationFirewallMode } from '../enums/WebApplicationFirewallMode';
/**
 * @description Defines contents of a web application firewall global configuration.
 */
export interface PolicySettings {
    /**
     * @description Describes if the policy is in enabled state or disabled state.
     */
    enabledState: WebApplicationFirewallEnabledState | string;
    /**
     * @description Describes if it is in detection mode or prevention mode at policy level.
     */
    mode: WebApplicationFirewallMode | string;
}
