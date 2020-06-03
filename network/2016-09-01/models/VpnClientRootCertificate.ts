import { SubResource } from './SubResource';
import { VpnClientRootCertificatePropertiesFormat } from './VpnClientRootCertificatePropertiesFormat';
/**
 * @description VPN client root certificate of virtual network gateway
 */
export interface VpnClientRootCertificate extends SubResource {
    properties?: VpnClientRootCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
