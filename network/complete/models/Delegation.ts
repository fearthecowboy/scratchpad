import { ServiceDelegationPropertiesFormat } from './ServiceDelegationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Details the service to which the subnet is delegated.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
