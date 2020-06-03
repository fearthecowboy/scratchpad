import { ApplicationGatewayRequestRoutingRuleType } from '../enums/ApplicationGatewayRequestRoutingRuleType';
import { ProvisioningState } from "../enums/ProvisioningState";
import { SubResource } from './SubResource';

/**
 * @description Properties of request routing rule of the application gateway.
 */
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
    /**
     * @description Rule type. Possible values are: 'Basic' and 'PathBasedRouting'.
     */
    ruleType: ApplicationGatewayRequestRoutingRuleType | string;
    /**
     * @description Backend address pool resource of the application gateway.
     */
    backendAddressPool: SubResource;
    /**
     * @description Frontend port resource of the application gateway.
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
     * @description Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Redirect configuration resource of the application gateway.
     * @since 2017-11-01
     */
    redirectConfiguration: SubResource;
    /** @description Priority of the request routing rule.
     * @since 2019-07-01
     */
    priority: int32 & Minimum<1> & Maximum<20000>;
    /** @description Rewrite Rule Set resource in Basic rule of the application gateway.
     * @since 2019-07-01
     */
    rewriteRuleSet: SubResource;
}
