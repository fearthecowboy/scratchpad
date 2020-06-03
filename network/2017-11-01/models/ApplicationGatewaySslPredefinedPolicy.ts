import { SubResource } from './SubResource';
import { ApplicationGatewaySslPredefinedPolicyPropertiesFormat } from './ApplicationGatewaySslPredefinedPolicyPropertiesFormat';
/**
 * @description An Ssl predefined policy
 */
export interface ApplicationGatewaySslPredefinedPolicy extends SubResource {
    /**
     * @description Name of Ssl predefined policy.
     */
    name: string;
    properties: ApplicationGatewaySslPredefinedPolicyPropertiesFormat;
}
