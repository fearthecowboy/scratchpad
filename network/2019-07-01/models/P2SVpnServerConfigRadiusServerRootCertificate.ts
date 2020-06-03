import { SubResource } from './SubResource';
import { P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat } from './P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat';
/**
 * @description Radius Server root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusServerRootCertificate extends SubResource {
    /**
     * @description Properties of the P2SVpnServerConfiguration Radius Server root certificate.
     */
    properties?: P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
