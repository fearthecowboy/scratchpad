
/**
 * @description Trusted Root certificates properties for tls.
 */
export interface FirewallPolicyTrustedRootCertificatePropertiesFormat {
    /**
     * @description Secret Id of (base-64 encoded unencrypted pfx) the public certificate data stored in KeyVault.
     */
    keyVaultSecretId: string;
}
