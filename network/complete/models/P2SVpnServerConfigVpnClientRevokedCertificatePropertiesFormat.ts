import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the revoked VPN client certificate of P2SVpnServerConfiguration.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat {
    /**
     * @description The revoked VPN client certificate thumbprint.
     */
    thumbprint: string;
    /**
     * @description The provisioning state of the VPN client revoked certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
