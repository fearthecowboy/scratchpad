import { ApplicationGatewaySku } from './ApplicationGatewaySku';
import { ApplicationGatewaySslPolicy } from './ApplicationGatewaySslPolicy';
import { ApplicationGatewayOperationalState } from '../enums/ApplicationGatewayOperationalState';
import { ApplicationGatewayIPConfiguration } from './ApplicationGatewayIPConfiguration';
import { ApplicationGatewayAuthenticationCertificate } from './ApplicationGatewayAuthenticationCertificate';
import { ApplicationGatewayTrustedRootCertificate } from './ApplicationGatewayTrustedRootCertificate';
import { ApplicationGatewaySslCertificate } from './ApplicationGatewaySslCertificate';
import { ApplicationGatewayFrontendIPConfiguration } from './ApplicationGatewayFrontendIPConfiguration';
import { ApplicationGatewayFrontendPort } from './ApplicationGatewayFrontendPort';
import { ApplicationGatewayProbe } from './ApplicationGatewayProbe';
import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHttpSettings } from './ApplicationGatewayBackendHttpSettings';
import { ApplicationGatewayHttpListener } from './ApplicationGatewayHttpListener';
import { ApplicationGatewayUrlPathMap } from './ApplicationGatewayUrlPathMap';
import { ApplicationGatewayRequestRoutingRule } from './ApplicationGatewayRequestRoutingRule';
import { ApplicationGatewayRewriteRuleSet } from './ApplicationGatewayRewriteRuleSet';
import { ApplicationGatewayRedirectConfiguration } from './ApplicationGatewayRedirectConfiguration';
import { ApplicationGatewayWebApplicationFirewallConfiguration } from './ApplicationGatewayWebApplicationFirewallConfiguration';
import { SubResource } from './SubResource';
import { ApplicationGatewayAutoscaleConfiguration } from './ApplicationGatewayAutoscaleConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
import { ApplicationGatewayCustomError } from './ApplicationGatewayCustomError';
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
     * @description Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    gatewayIPConfigurations: Array<ApplicationGatewayIPConfiguration>;
    /**
     * @description Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    authenticationCertificates: Array<ApplicationGatewayAuthenticationCertificate>;
    /**
     * @description Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    trustedRootCertificates: Array<ApplicationGatewayTrustedRootCertificate>;
    /**
     * @description SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    sslCertificates: Array<ApplicationGatewaySslCertificate>;
    /**
     * @description Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    frontendIPConfigurations: Array<ApplicationGatewayFrontendIPConfiguration>;
    /**
     * @description Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    frontendPorts: Array<ApplicationGatewayFrontendPort>;
    /**
     * @description Probes of the application gateway resource.
     */
    probes: Array<ApplicationGatewayProbe>;
    /**
     * @description Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    backendAddressPools: Array<ApplicationGatewayBackendAddressPool>;
    /**
     * @description Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    backendHttpSettingsCollection: Array<ApplicationGatewayBackendHttpSettings>;
    /**
     * @description Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    httpListeners: Array<ApplicationGatewayHttpListener>;
    /**
     * @description URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    urlPathMaps: Array<ApplicationGatewayUrlPathMap>;
    /**
     * @description Request routing rules of the application gateway resource.
     */
    requestRoutingRules: Array<ApplicationGatewayRequestRoutingRule>;
    /**
     * @description Rewrite rules for the application gateway resource.
     */
    rewriteRuleSets: Array<ApplicationGatewayRewriteRuleSet>;
    /**
     * @description Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    redirectConfigurations: Array<ApplicationGatewayRedirectConfiguration>;
    /**
     * @description Web application firewall configuration.
     */
    webApplicationFirewallConfiguration: ApplicationGatewayWebApplicationFirewallConfiguration;
    /**
     * @description Reference of the FirewallPolicy resource.
     */
    firewallPolicy: SubResource;
    /**
     * @description Whether HTTP2 is enabled on the application gateway resource.
     */
    enableHttp2: boolean;
    /**
     * @description Whether FIPS is enabled on the application gateway resource.
     */
    enableFips: boolean;
    /**
     * @description Autoscale Configuration.
     */
    autoscaleConfiguration: ApplicationGatewayAutoscaleConfiguration;
    /**
     * @description The resource GUID property of the application gateway resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the application gateway resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description Custom error configurations of the application gateway resource.
     */
    customErrorConfigurations: Array<ApplicationGatewayCustomError>;
}
