import { SubResource } from './SubResource';
import { IPConfigurationProfilePropertiesFormat } from './IPConfigurationProfilePropertiesFormat';
/**
 * @description IP configuration profile child resource.
 */
export interface IPConfigurationProfile extends SubResource {
    /**
     * @description Properties of the IP configuration profile.
     */
    properties: IPConfigurationProfilePropertiesFormat;
    /**
     * @description The name of the resource. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Sub Resource type.
     */
    readonly type: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
