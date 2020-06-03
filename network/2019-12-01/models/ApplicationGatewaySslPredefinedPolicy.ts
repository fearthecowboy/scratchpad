import { SubResource } from './SubResource';
import { ApplicationGatewaySslPredefinedPolicyPropertiesFormat } from './ApplicationGatewaySslPredefinedPolicyPropertiesFormat';
/**
 * @description An Ssl predefined policy.
 */
export interface ApplicationGatewaySslPredefinedPolicy extends SubResource {
    /**
     * @description Name of the Ssl predefined policy.
     */
    name: string;
    /**
     * @description Properties of the application gateway SSL predefined policy.
     */
    properties: ApplicationGatewaySslPredefinedPolicyPropertiesFormat;
}
