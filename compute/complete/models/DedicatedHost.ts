import { DedicatedHostProperties } from './DedicatedHostProperties';
import { Resource } from './Resource';
import { Sku } from './Sku';
/**
 * @description Specifies information about the Dedicated host.
 * @since 2019-12-01
 */
export interface DedicatedHost extends Resource {
    properties: DedicatedHostProperties;
    /**
     * @description SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    sku?: Sku;
}
