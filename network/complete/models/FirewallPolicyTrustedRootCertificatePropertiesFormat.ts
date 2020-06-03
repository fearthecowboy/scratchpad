
/**
 * @description Trusted Root certificates properties for tls.
 * @since 2020-04-01
 */
export interface FirewallPolicyTrustedRootCertificatePropertiesFormat {
    /**
     * @description Secret Id of (base-64 encoded unencrypted pfx) the public certificate data stored in KeyVault.
     */
    keyVaultSecretId: string;
}
