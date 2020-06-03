import { SubResource } from './SubResource';
import { SubnetPropertiesFormat } from './SubnetPropertiesFormat';
/**
 * @description Subnet in a virtual network resource.
 */
export interface Subnet extends SubResource {
    /**
     * @description Properties of the subnet.
     */
    properties: SubnetPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
