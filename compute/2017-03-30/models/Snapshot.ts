import { Resource } from './Resource';
import { DiskSku } from './DiskSku';
import { DiskProperties } from './DiskProperties';
/**
 * @description Snapshot resource.
 */
export interface Snapshot extends Resource {
    /**
     * @description Unused. Always Null.
     */
    readonly managedBy: string ;
    sku: DiskSku;
    properties: DiskProperties;
}
