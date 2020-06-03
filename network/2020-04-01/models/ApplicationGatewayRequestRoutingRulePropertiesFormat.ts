import { ApplicationGatewayRequestRoutingRuleType } from '../enums/ApplicationGatewayRequestRoutingRuleType';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of request routing rule of the application gateway.
 */
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
    /**
     * @description Rule type.
     */
    ruleType: ApplicationGatewayRequestRoutingRuleType | string;
    /**
     * @description Priority of the request routing rule.
     */
    priority: int32 & Minimum<1> & Maximum<20000>;
    /**
     * @description Backend address pool resource of the application gateway.
     */
    backendAddressPool: SubResource;
    /**
     * @description Backend http settings resource of the application gateway.
     */
    backendHttpSettings: SubResource;
    /**
     * @description Http listener resource of the application gateway.
     */
    httpListener: SubResource;
    /**
     * @description URL path map resource of the application gateway.
     */
    urlPathMap: SubResource;
    /**
     * @description Rewrite Rule Set resource in Basic rule of the application gateway.
     */
    rewriteRuleSet: SubResource;
    /**
     * @description Redirect configuration resource of the application gateway.
     */
    redirectConfiguration: SubResource;
    /**
     * @description The provisioning state of the request routing rule resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
