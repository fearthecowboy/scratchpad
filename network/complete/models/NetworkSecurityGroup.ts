import { NetworkSecurityGroupPropertiesFormat } from './NetworkSecurityGroupPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroup extends Resource {
    properties: NetworkSecurityGroupPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
