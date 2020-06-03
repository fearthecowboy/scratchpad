import { SubResource } from './SubResource';
import { ServiceDelegationPropertiesFormat } from './ServiceDelegationPropertiesFormat';
/**
 * @description Details the service to which the subnet is delegated.
 */
export interface Delegation extends SubResource {
    /**
     * @description Properties of the subnet.
     */
    properties: ServiceDelegationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a subnet. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
