import { VpnClientProtocol } from "../enums/VpnClientProtocol";
import { AddressSpace } from './AddressSpace';
import { IpsecPolicy } from "./IpsecPolicy";
import { RadiusServer } from "./RadiusServer";
import { VpnClientRevokedCertificate } from './VpnClientRevokedCertificate';
import { VpnClientRootCertificate } from './VpnClientRootCertificate';

/**
 * @description VpnClientConfiguration for P2S client.
 */
export interface VpnClientConfiguration {
    /**
     * @description The reference of the address space resource which represents Address space for P2S VpnClient.
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
    /** @description VpnClientProtocols for Virtual network gateway.
     * @since 2017-11-01
     */
    vpnClientProtocols: Array<VpnClientProtocol | string>;
    /** @description The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
     * @since 2017-11-01
     */
    radiusServerAddress: string;
    /** @description The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
     * @since 2017-11-01
     */
    radiusServerSecret: string;
    /** @description VpnClientIpsecPolicies for virtual network gateway P2S client.
     * @since 2019-07-01
     */
    vpnClientIpsecPolicies: Array<IpsecPolicy>;
    /** @description The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     * @since 2019-07-01
     */
    aadTenant: string;
    /** @description The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     * @since 2019-07-01
     */
    aadAudience: string;
    /** @description The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     * @since 2019-07-01
     */
    aadIssuer: string;
    /** @description The radiusServers property for multiple radius server configuration.
     * @since 2020-04-01
     */
    radiusServers: Array<RadiusServer>;
}
