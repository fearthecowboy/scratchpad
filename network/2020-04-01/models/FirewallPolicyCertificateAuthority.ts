import { FirewallPolicyCertificateAuthorityPropertiesFormat } from './FirewallPolicyCertificateAuthorityPropertiesFormat';
/**
 * @description Trusted Root certificates properties for tls.
 */
export interface FirewallPolicyCertificateAuthority {
    /**
     * @description Properties of the certificate authority.
     */
    properties: FirewallPolicyCertificateAuthorityPropertiesFormat;
    /**
     * @description Name of the CA certificate.
     */
    name: string;
}
