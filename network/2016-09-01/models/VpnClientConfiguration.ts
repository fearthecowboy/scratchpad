import { AddressSpace } from './AddressSpace';
import { VpnClientRootCertificate } from './VpnClientRootCertificate';
import { VpnClientRevokedCertificate } from './VpnClientRevokedCertificate';
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
}
