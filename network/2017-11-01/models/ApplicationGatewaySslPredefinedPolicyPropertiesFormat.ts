import { ApplicationGatewaySslCipherSuite } from '../enums/ApplicationGatewaySslCipherSuite';
import { ApplicationGatewaySslProtocol } from '../enums/ApplicationGatewaySslProtocol';
/**
 * @description Properties of ApplicationGatewaySslPredefinedPolicy
 */
export interface ApplicationGatewaySslPredefinedPolicyPropertiesFormat {
    /**
     * @description Ssl cipher suites to be enabled in the specified order for application gateway.
     */
    cipherSuites: Array<ApplicationGatewaySslCipherSuite | string>;
    /**
     * @description Minimum version of Ssl protocol to be supported on application gateway.
     */
    minProtocolVersion: ApplicationGatewaySslProtocol | string;
}
