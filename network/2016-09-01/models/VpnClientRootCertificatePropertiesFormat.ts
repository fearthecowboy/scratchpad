
/**
 * @description Properties of SSL certificates of application gateway
 */
export interface VpnClientRootCertificatePropertiesFormat {
    /**
     * @description The certificate public data.
     */
    publicCertData?: string;
    /**
     * @description The provisioning state of the VPN client root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
}
