import { ResourceUpdate } from './ResourceUpdate';
import { SnapshotSku } from "./SnapshotSku";
import { SnapshotUpdateProperties } from "./SnapshotUpdateProperties";

/**
 * @description Snapshot update resource.
 * @since 2017-03-30
 */
export interface SnapshotUpdate extends ResourceUpdate {
    /**
     * @Type  '2018-06-01' - type changed from 'DiskUpdateProperties' to 'SnapshotUpdateProperties'
     */
    properties: SnapshotUpdateProperties;
    /** @description Resource tags
     * @since 2018-06-01
     */
    tags: Dictionary<string>;
    /**
     * @since 2018-06-01
     */
    sku: SnapshotSku;
}
