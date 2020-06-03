import { ApplicationGatewayRequestRoutingRuleType } from '../enums/ApplicationGatewayRequestRoutingRuleType';
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
     */
    provisioningState: string;
}
