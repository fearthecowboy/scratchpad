import { ApplicationGatewaySku } from './ApplicationGatewaySku';
import { ApplicationGatewaySslPolicy } from './ApplicationGatewaySslPolicy';
import { ApplicationGatewayOperationalState } from '../enums/ApplicationGatewayOperationalState';
import { ApplicationGatewayIPConfiguration } from './ApplicationGatewayIPConfiguration';
import { ApplicationGatewayAuthenticationCertificate } from './ApplicationGatewayAuthenticationCertificate';
import { ApplicationGatewaySslCertificate } from './ApplicationGatewaySslCertificate';
import { ApplicationGatewayFrontendIPConfiguration } from './ApplicationGatewayFrontendIPConfiguration';
import { ApplicationGatewayFrontendPort } from './ApplicationGatewayFrontendPort';
import { ApplicationGatewayProbe } from './ApplicationGatewayProbe';
import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHttpSettings } from './ApplicationGatewayBackendHttpSettings';
import { ApplicationGatewayHttpListener } from './ApplicationGatewayHttpListener';
import { ApplicationGatewayUrlPathMap } from './ApplicationGatewayUrlPathMap';
import { ApplicationGatewayRequestRoutingRule } from './ApplicationGatewayRequestRoutingRule';
import { ApplicationGatewayRedirectConfiguration } from './ApplicationGatewayRedirectConfiguration';
import { ApplicationGatewayWebApplicationFirewallConfiguration } from './ApplicationGatewayWebApplicationFirewallConfiguration';
/**
 * @description Properties of the application gateway.
 */
export interface ApplicationGatewayPropertiesFormat {
    /**
     * @description SKU of the application gateway resource.
     */
    sku: ApplicationGatewaySku;
    /**
     * @description SSL policy of the application gateway resource.
     */
    sslPolicy: ApplicationGatewaySslPolicy;
    /**
     * @description Operational state of the application gateway resource.
     */
    readonly operationalState: ApplicationGatewayOperationalState | string;
    /**
     * @description Subnets of application the gateway resource.
     */
    gatewayIPConfigurations: Array<ApplicationGatewayIPConfiguration>;
    /**
     * @description Authentication certificates of the application gateway resource.
     */
    authenticationCertificates: Array<ApplicationGatewayAuthenticationCertificate>;
    /**
     * @description SSL certificates of the application gateway resource.
     */
    sslCertificates: Array<ApplicationGatewaySslCertificate>;
    /**
     * @description Frontend IP addresses of the application gateway resource.
     */
    frontendIPConfigurations: Array<ApplicationGatewayFrontendIPConfiguration>;
    /**
     * @description Frontend ports of the application gateway resource.
     */
    frontendPorts: Array<ApplicationGatewayFrontendPort>;
    /**
     * @description Probes of the application gateway resource.
     */
    probes: Array<ApplicationGatewayProbe>;
    /**
     * @description Backend address pool of the application gateway resource.
     */
    backendAddressPools: Array<ApplicationGatewayBackendAddressPool>;
    /**
     * @description Backend http settings of the application gateway resource.
     */
    backendHttpSettingsCollection: Array<ApplicationGatewayBackendHttpSettings>;
    /**
     * @description Http listeners of the application gateway resource.
     */
    httpListeners: Array<ApplicationGatewayHttpListener>;
    /**
     * @description URL path map of the application gateway resource.
     */
    urlPathMaps: Array<ApplicationGatewayUrlPathMap>;
    /**
     * @description Request routing rules of the application gateway resource.
     */
    requestRoutingRules: Array<ApplicationGatewayRequestRoutingRule>;
    /**
     * @description Redirect configurations of the application gateway resource.
     */
    redirectConfigurations: Array<ApplicationGatewayRedirectConfiguration>;
    /**
     * @description Web application firewall configuration.
     */
    webApplicationFirewallConfiguration: ApplicationGatewayWebApplicationFirewallConfiguration;
    /**
     * @description Whether HTTP2 is enabled on the application gateway resource.
     */
    enableHttp2: boolean;
    /**
     * @description Resource GUID property of the application gateway resource.
     */
    resourceGuid: string;
    /**
     * @description Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
