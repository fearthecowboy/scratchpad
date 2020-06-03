import { ProvisioningState } from "../enums/ProvisioningState";
import { SubResource } from './SubResource';

/**
 * @description Properties of probe of an application gateway.
 */
export interface ApplicationGatewayPathRulePropertiesFormat {
    /**
     * @description Path rules of URL path map.
     */
    paths: Array<string>;
    /**
     * @description Backend address pool resource of URL path map.
     */
    backendAddressPool: SubResource;
    /**
     * @description Backend http settings resource of URL path map.
     */
    backendHttpSettings: SubResource;
    /**
     * @description Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Redirect configuration resource of URL path map path rule.
     * @since 2017-11-01
     */
    redirectConfiguration: SubResource;
    /** @description Rewrite rule set resource of URL path map path rule.
     * @since 2019-07-01
     */
    rewriteRuleSet: SubResource;
    /** @description Reference to the FirewallPolicy resource.
     * @since 2019-12-01
     */
    firewallPolicy: SubResource;
}
