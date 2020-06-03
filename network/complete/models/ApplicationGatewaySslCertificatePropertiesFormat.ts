import { ProvisioningState } from "../enums/ProvisioningState";

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly publicCertData: string;
    /**
     * @description Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     * @since 2019-07-01
     */
    keyVaultSecretId: string;
}
