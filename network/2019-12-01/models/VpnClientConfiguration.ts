import { AddressSpace } from './AddressSpace';
import { VpnClientRootCertificate } from './VpnClientRootCertificate';
import { VpnClientRevokedCertificate } from './VpnClientRevokedCertificate';
import { VpnClientProtocol } from '../enums/VpnClientProtocol';
import { IpsecPolicy } from './IpsecPolicy';
/**
 * @description VpnClientConfiguration for P2S client.
 */
export interface VpnClientConfiguration {
    /**
     * @description The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool: AddressSpace;
    /**
     * @description VpnClientRootCertificate for virtual network gateway.
     */
    vpnClientRootCertificates: Array<VpnClientRootCertificate>;
    /**
     * @description VpnClientRevokedCertificate for Virtual network gateway.
     */
    vpnClientRevokedCertificates: Array<VpnClientRevokedCertificate>;
    /**
     * @description VpnClientProtocols for Virtual network gateway.
     */
    vpnClientProtocols: Array<VpnClientProtocol | string>;
    /**
     * @description VpnClientIpsecPolicies for virtual network gateway P2S client.
     */
    vpnClientIpsecPolicies: Array<IpsecPolicy>;
    /**
     * @description The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerAddress: string;
    /**
     * @description The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerSecret: string;
    /**
     * @description The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadTenant: string;
    /**
     * @description The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadAudience: string;
    /**
     * @description The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadIssuer: string;
}
