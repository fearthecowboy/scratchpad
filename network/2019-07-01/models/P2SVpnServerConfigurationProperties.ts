import { VpnGatewayTunnelingProtocol } from '../enums/VpnGatewayTunnelingProtocol';
import { P2SVpnServerConfigVpnClientRootCertificate } from './P2SVpnServerConfigVpnClientRootCertificate';
import { P2SVpnServerConfigVpnClientRevokedCertificate } from './P2SVpnServerConfigVpnClientRevokedCertificate';
import { P2SVpnServerConfigRadiusServerRootCertificate } from './P2SVpnServerConfigRadiusServerRootCertificate';
import { P2SVpnServerConfigRadiusClientRootCertificate } from './P2SVpnServerConfigRadiusClientRootCertificate';
import { IpsecPolicy } from './IpsecPolicy';
import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';
/**
 * @description Parameters for P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigurationProperties {
    /**
     * @description The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    name: string;
    /**
     * @description VPN protocols for the P2SVpnServerConfiguration.
     */
    vpnProtocols: Array<VpnGatewayTunnelingProtocol | string>;
    /**
     * @description VPN client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRootCertificates: Array<P2SVpnServerConfigVpnClientRootCertificate>;
    /**
     * @description VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRevokedCertificates: Array<P2SVpnServerConfigVpnClientRevokedCertificate>;
    /**
     * @description Radius Server root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusServerRootCertificates: Array<P2SVpnServerConfigRadiusServerRootCertificate>;
    /**
     * @description Radius client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusClientRootCertificates: Array<P2SVpnServerConfigRadiusClientRootCertificate>;
    /**
     * @description VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    vpnClientIpsecPolicies: Array<IpsecPolicy>;
    /**
     * @description The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress: string;
    /**
     * @description The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret: string;
    /**
     * @description The provisioning state of the P2S VPN server configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: Array<SubResource>;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
