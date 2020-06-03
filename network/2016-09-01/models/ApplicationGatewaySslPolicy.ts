import { ApplicationGatewaySslProtocol } from '../enums/ApplicationGatewaySslProtocol';
/**
 * @description Application gateway SSL policy.
 */
export interface ApplicationGatewaySslPolicy {
    /**
     * @description SSL protocols to be disabled on application gateway. Possible values are: 'TLSv1_0', 'TLSv1_1', and 'TLSv1_2'.
     */
    disabledSslProtocols: Array<ApplicationGatewaySslProtocol | string>;
}
