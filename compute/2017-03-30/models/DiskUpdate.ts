import { ResourceUpdate } from './ResourceUpdate';
import { DiskUpdateProperties } from './DiskUpdateProperties';
/**
 * @description Disk update resource.
 */
export interface DiskUpdate extends ResourceUpdate {
    properties: DiskUpdateProperties;
}
