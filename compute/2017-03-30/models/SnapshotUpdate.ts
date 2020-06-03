import { ResourceUpdate } from './ResourceUpdate';
import { DiskUpdateProperties } from './DiskUpdateProperties';
/**
 * @description Snapshot update resource.
 */
export interface SnapshotUpdate extends ResourceUpdate {
    properties: DiskUpdateProperties;
}
