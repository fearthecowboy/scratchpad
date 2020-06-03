import { AddressSpace } from './AddressSpace';
import { VpnClientRootCertificate } from './VpnClientRootCertificate';
import { VpnClientRevokedCertificate } from './VpnClientRevokedCertificate';
import { VpnClientProtocol } from '../enums/VpnClientProtocol';
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
    /**
     * @description VpnClientProtocols for Virtual network gateway.
     */
    vpnClientProtocols: Array<VpnClientProtocol | string>;
    /**
     * @description The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerAddress: string;
    /**
     * @description The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerSecret: string;
}
