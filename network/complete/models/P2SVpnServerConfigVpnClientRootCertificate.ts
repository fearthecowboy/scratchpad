import { P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat } from './P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat';
import { SubResource } from './SubResource';
/**
 * @description VPN client root certificate of P2SVpnServerConfiguration.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfigVpnClientRootCertificate extends SubResource {
    /**
     * @description Properties of the P2SVpnServerConfiguration VPN client root certificate.
     */
    properties?: P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
