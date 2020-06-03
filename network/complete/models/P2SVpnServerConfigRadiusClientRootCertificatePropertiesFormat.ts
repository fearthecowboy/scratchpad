import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the Radius client root certificate of P2SVpnServerConfiguration.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat {
    /**
     * @description The Radius client root certificate thumbprint.
     */
    thumbprint: string;
    /**
     * @description The provisioning state of the radius client root certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
