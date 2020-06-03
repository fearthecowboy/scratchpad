import { SubResource } from './SubResource';
import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ProvisioningState } from '../enums/ProvisioningState';
import { ApplicationGatewayCustomError } from './ApplicationGatewayCustomError';
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
     * @description Protocol of the HTTP listener.
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
     * @description The provisioning state of the HTTP listener resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Custom error configurations of the HTTP listener.
     */
    customErrorConfigurations: Array<ApplicationGatewayCustomError>;
    /**
     * @description Reference to the FirewallPolicy resource.
     */
    firewallPolicy: SubResource;
    /**
     * @description List of Host names for HTTP Listener that allows special wildcard characters as well.
     */
    hostNames: Array<string>;
}
