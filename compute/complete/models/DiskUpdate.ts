import { DiskSku } from "./DiskSku";
import { DiskUpdateProperties } from './DiskUpdateProperties';
import { ResourceUpdate } from './ResourceUpdate';

/**
 * @description Disk update resource.
 * @since 2017-03-30
 */
export interface DiskUpdate extends ResourceUpdate {
    properties: DiskUpdateProperties;
    /** @description Resource tags
     * @since 2018-06-01
     */
    tags: Dictionary<string>;
    /**
     * @since 2018-06-01
     */
    sku: DiskSku;
}
