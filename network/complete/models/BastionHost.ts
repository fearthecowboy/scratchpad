import { BastionHostPropertiesFormat } from './BastionHostPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Bastion Host resource.
 * @since 2019-07-01
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
