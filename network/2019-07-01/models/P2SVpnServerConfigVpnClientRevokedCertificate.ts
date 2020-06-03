import { SubResource } from './SubResource';
import { P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat } from './P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat';
/**
 * @description VPN client revoked certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigVpnClientRevokedCertificate extends SubResource {
    /**
     * @description Properties of the vpn client revoked certificate.
     */
    properties: P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
