import { VpnGatewayTunnelingProtocol } from '../enums/VpnGatewayTunnelingProtocol';
import { VpnAuthenticationType } from '../enums/VpnAuthenticationType';
import { VpnServerConfigVpnClientRootCertificate } from './VpnServerConfigVpnClientRootCertificate';
import { VpnServerConfigVpnClientRevokedCertificate } from './VpnServerConfigVpnClientRevokedCertificate';
import { VpnServerConfigRadiusServerRootCertificate } from './VpnServerConfigRadiusServerRootCertificate';
import { VpnServerConfigRadiusClientRootCertificate } from './VpnServerConfigRadiusClientRootCertificate';
import { IpsecPolicy } from './IpsecPolicy';
import { AadAuthenticationParameters } from './AadAuthenticationParameters';
import { P2SVpnGateway } from './P2SVpnGateway';
/**
 * @description Parameters for VpnServerConfiguration.
 */
export interface VpnServerConfigurationProperties {
    /**
     * @description The name of the VpnServerConfiguration that is unique within a resource group.
     */
    name: string;
    /**
     * @description VPN protocols for the VpnServerConfiguration.
     */
    vpnProtocols: Array<VpnGatewayTunnelingProtocol | string>;
    /**
     * @description VPN authentication types for the VpnServerConfiguration.
     */
    vpnAuthenticationTypes: Array<VpnAuthenticationType | string>;
    /**
     * @description VPN client root certificate of VpnServerConfiguration.
     */
    vpnClientRootCertificates: Array<VpnServerConfigVpnClientRootCertificate>;
    /**
     * @description VPN client revoked certificate of VpnServerConfiguration.
     */
    vpnClientRevokedCertificates: Array<VpnServerConfigVpnClientRevokedCertificate>;
    /**
     * @description Radius Server root certificate of VpnServerConfiguration.
     */
    radiusServerRootCertificates: Array<VpnServerConfigRadiusServerRootCertificate>;
    /**
     * @description Radius client root certificate of VpnServerConfiguration.
     */
    radiusClientRootCertificates: Array<VpnServerConfigRadiusClientRootCertificate>;
    /**
     * @description VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    vpnClientIpsecPolicies: Array<IpsecPolicy>;
    /**
     * @description The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress: string;
    /**
     * @description The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret: string;
    /**
     * @description The set of aad vpn authentication parameters.
     */
    aadAuthenticationParameters: AadAuthenticationParameters;
    /**
     * @description The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
    /**
     * @description List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: Array<P2SVpnGateway>;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
