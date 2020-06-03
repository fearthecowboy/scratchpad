import { Resource } from './Resource';
import { ApplicationSecurityGroupPropertiesFormat } from './ApplicationSecurityGroupPropertiesFormat';
/**
 * @description An application security group in a resource group.
 */
export interface ApplicationSecurityGroup extends Resource {
    /**
     * @description Properties of the application security group.
     */
    properties: ApplicationSecurityGroupPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
