import { SubResource } from './SubResource';
import { VpnClientRevokedCertificatePropertiesFormat } from './VpnClientRevokedCertificatePropertiesFormat';

/**
 * @description VPN client revoked certificate of virtual network gateway.
 */
export interface VpnClientRevokedCertificate extends SubResource {
    properties: VpnClientRevokedCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
