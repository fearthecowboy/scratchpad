import { IPConfigurationProfilePropertiesFormat } from './IPConfigurationProfilePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description IP configuration profile child resource.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
