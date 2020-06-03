
/**
 * @description Properties of the revoked VPN client certificate of VpnServerConfiguration.
 * @since 2019-12-01
 */
export interface VpnServerConfigVpnClientRevokedCertificate {
    /**
     * @description The certificate name.
     */
    name: string;
    /**
     * @description The revoked VPN client certificate thumbprint.
     */
    thumbprint: string;
}
