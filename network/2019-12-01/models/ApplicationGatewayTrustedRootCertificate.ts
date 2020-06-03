import { SubResource } from './SubResource';
import { ApplicationGatewayTrustedRootCertificatePropertiesFormat } from './ApplicationGatewayTrustedRootCertificatePropertiesFormat';
/**
 * @description Trusted Root certificates of an application gateway.
 */
export interface ApplicationGatewayTrustedRootCertificate extends SubResource {
    /**
     * @description Properties of the application gateway trusted root certificate.
     */
    properties: ApplicationGatewayTrustedRootCertificatePropertiesFormat;
    /**
     * @description Name of the trusted root certificate that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
