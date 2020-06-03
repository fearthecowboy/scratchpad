import { SubResource } from './SubResource';
import { IPConfigurationPropertiesFormat } from './IPConfigurationPropertiesFormat';
/**
 * @description IPConfiguration
 */
export interface IPConfiguration extends SubResource {
    properties: IPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
