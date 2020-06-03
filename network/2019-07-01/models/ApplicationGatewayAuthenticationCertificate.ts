import { SubResource } from './SubResource';
import { ApplicationGatewayAuthenticationCertificatePropertiesFormat } from './ApplicationGatewayAuthenticationCertificatePropertiesFormat';
/**
 * @description Authentication certificates of an application gateway.
 */
export interface ApplicationGatewayAuthenticationCertificate extends SubResource {
    /**
     * @description Properties of the application gateway authentication certificate.
     */
    properties: ApplicationGatewayAuthenticationCertificatePropertiesFormat;
    /**
     * @description Name of the authentication certificate that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    type: string;
}
