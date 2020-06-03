import { DiskUpdateProperties } from './DiskUpdateProperties';
import { DiskSku } from './DiskSku';
/**
 * @description Disk update resource.
 */
export interface DiskUpdate {
    properties: DiskUpdateProperties;
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
    sku: DiskSku;
}
