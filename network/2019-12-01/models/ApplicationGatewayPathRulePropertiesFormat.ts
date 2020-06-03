import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of path rule of an application gateway.
 */
export interface ApplicationGatewayPathRulePropertiesFormat {
    /**
     * @description Path rules of URL path map.
     */
    paths: Array<string>;
    /**
     * @description Backend address pool resource of URL path map path rule.
     */
    backendAddressPool: SubResource;
    /**
     * @description Backend http settings resource of URL path map path rule.
     */
    backendHttpSettings: SubResource;
    /**
     * @description Redirect configuration resource of URL path map path rule.
     */
    redirectConfiguration: SubResource;
    /**
     * @description Rewrite rule set resource of URL path map path rule.
     */
    rewriteRuleSet: SubResource;
    /**
     * @description The provisioning state of the path rule resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Reference to the FirewallPolicy resource.
     */
    firewallPolicy: SubResource;
}
