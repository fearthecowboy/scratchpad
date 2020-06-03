import { ApplicationGatewaySslProtocol } from '../enums/ApplicationGatewaySslProtocol';
import { ApplicationGatewaySslPolicyType } from '../enums/ApplicationGatewaySslPolicyType';
import { ApplicationGatewaySslPolicyName } from '../enums/ApplicationGatewaySslPolicyName';
import { ApplicationGatewaySslCipherSuite } from '../enums/ApplicationGatewaySslCipherSuite';
/**
 * @description Application Gateway Ssl policy.
 */
export interface ApplicationGatewaySslPolicy {
    /**
     * @description Ssl protocols to be disabled on application gateway.
     */
    disabledSslProtocols: Array<ApplicationGatewaySslProtocol | string>;
    /**
     * @description Type of Ssl Policy.
     */
    policyType: ApplicationGatewaySslPolicyType | string;
    /**
     * @description Name of Ssl predefined policy.
     */
    policyName: ApplicationGatewaySslPolicyName | string;
    /**
     * @description Ssl cipher suites to be enabled in the specified order to application gateway.
     */
    cipherSuites: Array<ApplicationGatewaySslCipherSuite | string>;
    /**
     * @description Minimum version of Ssl protocol to be supported on application gateway.
     */
    minProtocolVersion: ApplicationGatewaySslProtocol | string;
}
