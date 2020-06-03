import { SnapshotUpdateProperties } from './SnapshotUpdateProperties';
import { SnapshotSku } from './SnapshotSku';
/**
 * @description Snapshot update resource.
 */
export interface SnapshotUpdate {
    properties: SnapshotUpdateProperties;
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
    sku: SnapshotSku;
}
