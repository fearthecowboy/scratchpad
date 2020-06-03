import { Resource } from './Resource';
import { NetworkSecurityGroupPropertiesFormat } from './NetworkSecurityGroupPropertiesFormat';
/**
 * @description NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroup extends Resource {
    properties: NetworkSecurityGroupPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
