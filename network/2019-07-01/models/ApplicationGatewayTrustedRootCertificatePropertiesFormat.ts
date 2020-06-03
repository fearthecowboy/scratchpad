import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Trusted Root certificates properties of an application gateway.
 */
export interface ApplicationGatewayTrustedRootCertificatePropertiesFormat {
    /**
     * @description Certificate public data.
     */
    data: string;
    /**
     * @description Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId: string;
    /**
     * @description The provisioning state of the trusted root certificate resource.
     */
    provisioningState: ProvisioningState | string;
}
