import { Resource } from './Resource';
import { SnapshotProperties } from "./SnapshotProperties";
import { SnapshotSku } from "./SnapshotSku";

/**
 * @description Snapshot resource.
 * @since 2017-03-30
 */
export interface Snapshot extends Resource {
    /**
     * @description Unused. Always Null.
     */
    readonly managedBy: string ;
    /**
     * @Type  '2018-06-01' - type changed from 'DiskSku' to 'SnapshotSku'
     */
    sku: SnapshotSku;
    /**
     * @Type  '2018-06-01' - type changed from 'DiskProperties' to 'SnapshotProperties'
     */
    properties: SnapshotProperties;
}
