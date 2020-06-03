import { ApplicationGatewaySslCipherSuite } from "../enums/ApplicationGatewaySslCipherSuite";
import { ApplicationGatewaySslPolicyName } from "../enums/ApplicationGatewaySslPolicyName";
import { ApplicationGatewaySslPolicyType } from "../enums/ApplicationGatewaySslPolicyType";
import { ApplicationGatewaySslProtocol } from '../enums/ApplicationGatewaySslProtocol';

/**
 * @description Application gateway SSL policy.
 */
export interface ApplicationGatewaySslPolicy {
    /**
     * @description SSL protocols to be disabled on application gateway. Possible values are: 'TLSv1_0', 'TLSv1_1', and 'TLSv1_2'.
     */
    disabledSslProtocols: Array<ApplicationGatewaySslProtocol | string>;
    /** @description Type of Ssl Policy
     * @since 2017-11-01
     */
    policyType: ApplicationGatewaySslPolicyType | string;
    /** @description Name of Ssl predefined policy
     * @since 2017-11-01
     */
    policyName: ApplicationGatewaySslPolicyName | string;
    /** @description Ssl cipher suites to be enabled in the specified order to application gateway.
     * @since 2017-11-01
     */
    cipherSuites: Array<ApplicationGatewaySslCipherSuite | string>;
    /** @description Minimum version of Ssl protocol to be supported on application gateway.
     * @since 2017-11-01
     */
    minProtocolVersion: ApplicationGatewaySslProtocol | string;
}
