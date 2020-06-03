import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of SSL certificates of an application gateway.
 */
export interface ApplicationGatewaySslCertificatePropertiesFormat {
    /**
     * @description Base-64 encoded pfx certificate. Only applicable in PUT Request.
     */
    data: string;
    /**
     * @description Password for the pfx file specified in data. Only applicable in PUT request.
     */
    password: string;
    /**
     * @description Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.
     */
    publicCertData: string;
    /**
     * @description Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId: string;
    /**
     * @description The provisioning state of the SSL certificate resource.
     */
    provisioningState: ProvisioningState | string;
}
