import { BastionHostIPConfigurationPropertiesFormat } from './BastionHostIPConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description IP configuration of an Bastion Host.
 * @since 2019-07-01
 */
export interface BastionHostIPConfiguration extends SubResource {
    /**
     * @description Represents the ip configuration associated with the resource.
     */
    properties: BastionHostIPConfigurationPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Ip configuration type.
     */
    readonly type: string ;
}
