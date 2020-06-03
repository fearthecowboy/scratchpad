import { SubResource } from './SubResource';
import { ApplicationGatewayPathRule } from './ApplicationGatewayPathRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of UrlPathMap of the application gateway.
 */
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
    /**
     * @description Default backend address pool resource of URL path map.
     */
    defaultBackendAddressPool: SubResource;
    /**
     * @description Default backend http settings resource of URL path map.
     */
    defaultBackendHttpSettings: SubResource;
    /**
     * @description Default Rewrite rule set resource of URL path map.
     */
    defaultRewriteRuleSet: SubResource;
    /**
     * @description Default redirect configuration resource of URL path map.
     */
    defaultRedirectConfiguration: SubResource;
    /**
     * @description Path rule of URL path map resource.
     */
    pathRules: Array<ApplicationGatewayPathRule>;
    /**
     * @description The provisioning state of the URL path map resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
