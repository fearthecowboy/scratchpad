import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Radius Server root certificate of P2SVpnServerConfiguration.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat {
    /**
     * @description The certificate public data.
     */
    publicCertData?: string;
    /**
     * @description The provisioning state of the radius server root certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
