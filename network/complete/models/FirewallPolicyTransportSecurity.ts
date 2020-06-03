import { FirewallPolicyCertificateAuthority } from './FirewallPolicyCertificateAuthority';
import { FirewallPolicyTrustedRootCertificate } from './FirewallPolicyTrustedRootCertificate';
/**
 * @description Configuration needed to perform TLS termination & initiation.
 * @since 2020-04-01
 */
export interface FirewallPolicyTransportSecurity {
    /**
     * @description The CA used for intermediate CA generation.
     */
    certificateAuthority: FirewallPolicyCertificateAuthority;
    /**
     * @description List of domains which are excluded from TLS termination.
     */
    excludedDomains: Array<string>;
    /**
     * @description Certificates which are to be trusted by the firewall.
     */
    trustedRootCertificates: Array<FirewallPolicyTrustedRootCertificate>;
}
