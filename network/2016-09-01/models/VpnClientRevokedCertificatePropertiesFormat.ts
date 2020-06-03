
/**
 * @description Properties of the revoked VPN client certificate of virtual network gateway.
 */
export interface VpnClientRevokedCertificatePropertiesFormat {
    /**
     * @description The revoked VPN client certificate thumbprint.
     */
    thumbprint: string;
    /**
     * @description The provisioning state of the VPN client revoked certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
}
