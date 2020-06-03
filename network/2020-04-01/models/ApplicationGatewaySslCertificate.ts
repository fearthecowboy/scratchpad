import { SubResource } from './SubResource';
import { ApplicationGatewaySslCertificatePropertiesFormat } from './ApplicationGatewaySslCertificatePropertiesFormat';
/**
 * @description SSL certificates of an application gateway.
 */
export interface ApplicationGatewaySslCertificate extends SubResource {
    /**
     * @description Properties of the application gateway SSL certificate.
     */
    properties: ApplicationGatewaySslCertificatePropertiesFormat;
    /**
     * @description Name of the SSL certificate that is unique within an Application Gateway.
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
