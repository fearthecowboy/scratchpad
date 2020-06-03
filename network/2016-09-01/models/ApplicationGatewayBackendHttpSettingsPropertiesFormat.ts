import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ApplicationGatewayCookieBasedAffinity } from '../enums/ApplicationGatewayCookieBasedAffinity';
import { SubResource } from './SubResource';
/**
 * @description Properties of Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
    /**
     * @description Port
     */
    port: int32;
    /**
     * @description Protocol. Possible values are: 'Http' and 'Https'.
     */
    protocol: ApplicationGatewayProtocol | string;
    /**
     * @description Cookie based affinity. Possible values are: 'Enabled' and 'Disabled'.
     */
    cookieBasedAffinity: ApplicationGatewayCookieBasedAffinity | string;
    /**
     * @description Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
     */
    requestTimeout: int32;
    /**
     * @description Probe resource of an application gateway.
     */
    probe: SubResource;
    /**
     * @description Array of references to application gateway authentication certificates.
     */
    authenticationCertificates: Array<SubResource>;
    /**
     * @description Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
