import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of SSL certificates of application gateway.
 */
export interface VpnClientRootCertificatePropertiesFormat {
    /**
     * @description The certificate public data.
     */
    publicCertData?: string;
    /**
     * @description The provisioning state of the VPN client root certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
