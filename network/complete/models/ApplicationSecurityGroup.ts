import { ApplicationSecurityGroupPropertiesFormat } from './ApplicationSecurityGroupPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description An application security group in a resource group.
 * @since 2017-11-01
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
