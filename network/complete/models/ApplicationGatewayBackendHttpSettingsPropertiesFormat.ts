import { ApplicationGatewayCookieBasedAffinity } from '../enums/ApplicationGatewayCookieBasedAffinity';
import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayConnectionDraining } from "./ApplicationGatewayConnectionDraining";
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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Connection draining of the backend http settings resource.
     * @since 2017-11-01
     */
    connectionDraining: ApplicationGatewayConnectionDraining;
    /** @description Host header to be sent to the backend servers.
     * @since 2017-11-01
     */
    hostName: string;
    /** @description Whether to pick host header should be picked from the host name of the backend server. Default value is false.
     * @since 2017-11-01
     */
    pickHostNameFromBackendAddress: boolean;
    /** @description Cookie name to use for the affinity cookie.
     * @since 2017-11-01
     */
    affinityCookieName: string;
    /** @description Whether the probe is enabled. Default value is false.
     * @since 2017-11-01
     */
    probeEnabled: boolean;
    /** @description Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
     * @since 2017-11-01
     */
    path: string;
    /** @description Array of references to application gateway trusted root certificates.
     * @since 2019-07-01
     */
    trustedRootCertificates: Array<SubResource>;
}
