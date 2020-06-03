import { SubResource } from './SubResource';
import { ResourceNavigationLinkFormat } from './ResourceNavigationLinkFormat';
/**
 * @description ResourceNavigationLink resource.
 */
export interface ResourceNavigationLink extends SubResource {
    /**
     * @description Resource navigation link properties format.
     */
    properties: ResourceNavigationLinkFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Resource navigation link identifier.
     */
    readonly id: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Resource type.
     */
    readonly type: string ;
}
