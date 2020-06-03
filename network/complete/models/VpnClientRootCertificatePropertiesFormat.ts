import { ProvisioningState } from "../enums/ProvisioningState";

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
}
