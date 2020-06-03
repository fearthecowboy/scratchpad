import { SubResource } from './SubResource';
import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
/**
 * @description Properties of HTTP listener of an application gateway.
 */
export interface ApplicationGatewayHttpListenerPropertiesFormat {
    /**
     * @description Frontend IP configuration resource of an application gateway.
     */
    frontendIPConfiguration: SubResource;
    /**
     * @description Frontend port resource of an application gateway.
     */
    frontendPort: SubResource;
    /**
     * @description Protocol. Possible values are: 'Http' and 'Https'.
     */
    protocol: ApplicationGatewayProtocol | string;
    /**
     * @description Host name of HTTP listener.
     */
    hostName: string;
    /**
     * @description SSL certificate resource of an application gateway.
     */
    sslCertificate: SubResource;
    /**
     * @description Applicable only if protocol is https. Enables SNI for multi-hosting.
     */
    requireServerNameIndication: boolean;
    /**
     * @description Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
