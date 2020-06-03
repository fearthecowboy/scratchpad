import { ApplicationGatewaySslCipherSuite } from '../enums/ApplicationGatewaySslCipherSuite';
import { ApplicationGatewaySslPolicyName } from '../enums/ApplicationGatewaySslPolicyName';
import { ApplicationGatewaySslProtocol } from '../enums/ApplicationGatewaySslProtocol';
import { SubResource } from './SubResource';

/**
 * @description Properties of ApplicationGatewayAvailableSslOptions
 * @since 2017-11-01
 */
export interface ApplicationGatewayAvailableSslOptionsPropertiesFormat {
    /**
     * @description List of available Ssl predefined policy.
     */
    predefinedPolicies: Array<SubResource>;
    /**
     * @description Name of the Ssl predefined policy applied by default to application gateway
     */
    defaultPolicy: ApplicationGatewaySslPolicyName | string;
    /**
     * @description List of available Ssl cipher suites.
     */
    availableCipherSuites: Array<ApplicationGatewaySslCipherSuite | string>;
    /**
     * @description List of available Ssl protocols.
     */
    availableProtocols: Array<ApplicationGatewaySslProtocol | string>;
}
