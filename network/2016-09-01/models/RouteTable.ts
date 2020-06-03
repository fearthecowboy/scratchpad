import { Resource } from './Resource';
import { RouteTablePropertiesFormat } from './RouteTablePropertiesFormat';
/**
 * @description Route table resource.
 */
export interface RouteTable extends Resource {
    properties: RouteTablePropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
