import { Resource } from './Resource';
import { BastionHostPropertiesFormat } from './BastionHostPropertiesFormat';
/**
 * @description Bastion Host resource.
 */
export interface BastionHost extends Resource {
    /**
     * @description Represents the bastion host resource.
     */
    properties: BastionHostPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
