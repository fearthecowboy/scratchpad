import { Resource } from './Resource';
import { DedicatedHostProperties } from './DedicatedHostProperties';
import { Sku } from './Sku';
/**
 * @description Specifies information about the Dedicated host.
 */
export interface DedicatedHost extends Resource {
    properties: DedicatedHostProperties;
    /**
     * @description SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    sku?: Sku;
}
