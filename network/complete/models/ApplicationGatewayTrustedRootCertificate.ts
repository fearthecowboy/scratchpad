import { ApplicationGatewayTrustedRootCertificatePropertiesFormat } from './ApplicationGatewayTrustedRootCertificatePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Trusted Root certificates of an application gateway.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description Type of the resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly type: string;
}
