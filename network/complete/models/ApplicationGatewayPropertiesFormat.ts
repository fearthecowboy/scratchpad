import { ApplicationGatewayOperationalState } from '../enums/ApplicationGatewayOperationalState';
import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayAuthenticationCertificate } from './ApplicationGatewayAuthenticationCertificate';
import { ApplicationGatewayAutoscaleConfiguration } from "./ApplicationGatewayAutoscaleConfiguration";
import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHttpSettings } from './ApplicationGatewayBackendHttpSettings';
import { ApplicationGatewayCustomError } from "./ApplicationGatewayCustomError";
import { ApplicationGatewayFrontendIPConfiguration } from './ApplicationGatewayFrontendIPConfiguration';
import { ApplicationGatewayFrontendPort } from './ApplicationGatewayFrontendPort';
import { ApplicationGatewayHttpListener } from './ApplicationGatewayHttpListener';
import { ApplicationGatewayIPConfiguration } from './ApplicationGatewayIPConfiguration';
import { ApplicationGatewayProbe } from './ApplicationGatewayProbe';
import { ApplicationGatewayRedirectConfiguration } from "./ApplicationGatewayRedirectConfiguration";
import { ApplicationGatewayRequestRoutingRule } from './ApplicationGatewayRequestRoutingRule';
import { ApplicationGatewayRewriteRuleSet } from "./ApplicationGatewayRewriteRuleSet";
import { ApplicationGatewaySku } from './ApplicationGatewaySku';
import { ApplicationGatewaySslCertificate } from './ApplicationGatewaySslCertificate';
import { ApplicationGatewaySslPolicy } from './ApplicationGatewaySslPolicy';
import { ApplicationGatewayTrustedRootCertificate } from "./ApplicationGatewayTrustedRootCertificate";
import { ApplicationGatewayUrlPathMap } from './ApplicationGatewayUrlPathMap';
import { ApplicationGatewayWebApplicationFirewallConfiguration } from './ApplicationGatewayWebApplicationFirewallConfiguration';
import { SubResource } from "./SubResource";

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
     * @description Operational state of the application gateway resource. Possible values are: 'Stopped', 'Started', 'Running', and 'Stopping'.
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
     * @description Web application firewall configuration.
     */
    webApplicationFirewallConfiguration: ApplicationGatewayWebApplicationFirewallConfiguration;
    /**
     * @description Resource GUID property of the application gateway resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Redirect configurations of the application gateway resource.
     * @since 2017-11-01
     */
    redirectConfigurations: Array<ApplicationGatewayRedirectConfiguration>;
    /** @description Whether HTTP2 is enabled on the application gateway resource.
     * @since 2017-11-01
     */
    enableHttp2: boolean;
    /** @description Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     * @since 2019-07-01
     */
    trustedRootCertificates: Array<ApplicationGatewayTrustedRootCertificate>;
    /** @description Rewrite rules for the application gateway resource.
     * @since 2019-07-01
     */
    rewriteRuleSets: Array<ApplicationGatewayRewriteRuleSet>;
    /** @description Reference of the FirewallPolicy resource.
     * @since 2019-07-01
     */
    firewallPolicy: SubResource;
    /** @description Whether FIPS is enabled on the application gateway resource.
     * @since 2019-07-01
     */
    enableFips: boolean;
    /** @description Autoscale Configuration.
     * @since 2019-07-01
     */
    autoscaleConfiguration: ApplicationGatewayAutoscaleConfiguration;
    /** @description Custom error configurations of the application gateway resource.
     * @since 2019-07-01
     */
    customErrorConfigurations: Array<ApplicationGatewayCustomError>;
    /** @description If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
     * @since 2020-04-01
     */
    forceFirewallPolicyAssociation: boolean;
}
