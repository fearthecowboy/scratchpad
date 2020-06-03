import { SubResource } from './SubResource';
import { IPConfigurationPropertiesFormat } from './IPConfigurationPropertiesFormat';
/**
 * @description IP configuration.
 */
export interface IPConfiguration extends SubResource {
    /**
     * @description Properties of the IP configuration.
     */
    properties: IPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
