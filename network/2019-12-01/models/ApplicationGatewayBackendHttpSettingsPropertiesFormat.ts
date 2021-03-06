import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ApplicationGatewayCookieBasedAffinity } from '../enums/ApplicationGatewayCookieBasedAffinity';
import { SubResource } from './SubResource';
import { ApplicationGatewayConnectionDraining } from './ApplicationGatewayConnectionDraining';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
    /**
     * @description The destination port on the backend.
     */
    port: int32;
    /**
     * @description The protocol used to communicate with the backend.
     */
    protocol: ApplicationGatewayProtocol | string;
    /**
     * @description Cookie based affinity.
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
     * @description Array of references to application gateway trusted root certificates.
     */
    trustedRootCertificates: Array<SubResource>;
    /**
     * @description Connection draining of the backend http settings resource.
     */
    connectionDraining: ApplicationGatewayConnectionDraining;
    /**
     * @description Host header to be sent to the backend servers.
     */
    hostName: string;
    /**
     * @description Whether to pick host header should be picked from the host name of the backend server. Default value is false.
     */
    pickHostNameFromBackendAddress: boolean;
    /**
     * @description Cookie name to use for the affinity cookie.
     */
    affinityCookieName: string;
    /**
     * @description Whether the probe is enabled. Default value is false.
     */
    probeEnabled: boolean;
    /**
     * @description Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
     */
    path: string;
    /**
     * @description The provisioning state of the backend HTTP settings resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
