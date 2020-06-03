import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayCustomError } from "./ApplicationGatewayCustomError";
import { SubResource } from './SubResource';

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Custom error configurations of the HTTP listener.
     * @since 2019-07-01
     */
    customErrorConfigurations: Array<ApplicationGatewayCustomError>;
    /** @description Reference to the FirewallPolicy resource.
     * @since 2019-12-01
     */
    firewallPolicy: SubResource;
    /** @description List of Host names for HTTP Listener that allows special wildcard characters as well.
     * @since 2019-12-01
     */
    hostNames: Array<string>;
}
