import { ProvisioningState } from "../enums/ProvisioningState";

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
}
