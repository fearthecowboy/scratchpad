import { SubResource } from './SubResource';
import { ApplicationGatewaySslCertificatePropertiesFormat } from './ApplicationGatewaySslCertificatePropertiesFormat';
/**
 * @description SSL certificates of an application gateway.
 */
export interface ApplicationGatewaySslCertificate extends SubResource {
    properties: ApplicationGatewaySslCertificatePropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
