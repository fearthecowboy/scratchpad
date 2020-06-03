import { SubResource } from './SubResource';
import { ServiceAssociationLinkPropertiesFormat } from './ServiceAssociationLinkPropertiesFormat';
/**
 * @description ServiceAssociationLink resource.
 */
export interface ServiceAssociationLink extends SubResource {
    /**
     * @description Resource navigation link properties format.
     */
    properties: ServiceAssociationLinkPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Resource type.
     */
    type: string;
}
