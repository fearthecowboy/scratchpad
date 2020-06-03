
/**
 * @description Trusted Root certificates properties for tls.
 * @since 2020-04-01
 */
export interface FirewallPolicyCertificateAuthorityPropertiesFormat {
    /**
     * @description Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId: string;
}
