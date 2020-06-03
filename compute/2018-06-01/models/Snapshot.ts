import { Resource } from './Resource';
import { SnapshotSku } from './SnapshotSku';
import { SnapshotProperties } from './SnapshotProperties';
/**
 * @description Snapshot resource.
 */
export interface Snapshot extends Resource {
    /**
     * @description Unused. Always Null.
     */
    readonly managedBy: string ;
    sku: SnapshotSku;
    properties: SnapshotProperties;
}
