import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description Trusted Root certificates properties of an application gateway.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
