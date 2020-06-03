import { FirewallPolicyTrustedRootCertificatePropertiesFormat } from './FirewallPolicyTrustedRootCertificatePropertiesFormat';
/**
 * @description Trusted Root certificates of a firewall policy.
 */
export interface FirewallPolicyTrustedRootCertificate {
    /**
     * @description Properties of the trusted root authorities.
     */
    properties: FirewallPolicyTrustedRootCertificatePropertiesFormat;
    /**
     * @description Name of the trusted root certificate that is unique within a firewall policy.
     */
    name: string;
}
