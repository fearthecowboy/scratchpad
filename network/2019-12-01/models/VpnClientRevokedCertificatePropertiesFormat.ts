import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the revoked VPN client certificate of virtual network gateway.
 */
export interface VpnClientRevokedCertificatePropertiesFormat {
    /**
     * @description The revoked VPN client certificate thumbprint.
     */
    thumbprint: string;
    /**
     * @description The provisioning state of the VPN client revoked certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
