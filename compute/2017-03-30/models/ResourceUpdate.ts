import { DiskSku } from './DiskSku';
/**
 * @description The Resource model definition.
 */
export interface ResourceUpdate {
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
    sku: DiskSku;
}
