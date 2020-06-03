import { ApplicationGatewaySslPredefinedPolicyPropertiesFormat } from './ApplicationGatewaySslPredefinedPolicyPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description An Ssl predefined policy
 * @since 2017-11-01
 */
export interface ApplicationGatewaySslPredefinedPolicy extends SubResource {
    /**
     * @description Name of Ssl predefined policy.
     */
    name: string;
    properties: ApplicationGatewaySslPredefinedPolicyPropertiesFormat;
}
