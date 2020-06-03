import { SubResource } from './SubResource';
import { P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat } from './P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat';
/**
 * @description Radius client root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusClientRootCertificate extends SubResource {
    /**
     * @description Properties of the Radius client root certificate.
     */
    properties: P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
