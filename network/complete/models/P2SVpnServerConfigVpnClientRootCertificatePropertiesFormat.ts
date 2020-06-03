import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of VPN client root certificate of P2SVpnServerConfiguration.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat {
    /**
     * @description The certificate public data.
     */
    publicCertData?: string;
    /**
     * @description The provisioning state of the VPN client root certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
