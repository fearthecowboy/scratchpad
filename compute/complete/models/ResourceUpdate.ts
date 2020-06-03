import { DiskSku } from './DiskSku';
/**
 * @description The Resource model definition.
 * @since 2017-03-30
 */
export interface ResourceUpdate {
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
    sku: DiskSku;
}
