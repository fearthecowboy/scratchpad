import { Resource } from './Resource';
import { RouteTablePropertiesFormat } from './RouteTablePropertiesFormat';
/**
 * @description Route table resource.
 */
export interface RouteTable extends Resource {
    /**
     * @description Properties of the route table.
     */
    properties: RouteTablePropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
