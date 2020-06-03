import { ServiceAssociationLinkPropertiesFormat } from './ServiceAssociationLinkPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description ServiceAssociationLink resource.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly type: string;
}
