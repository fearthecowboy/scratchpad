import { Resource } from './Resource';
import { DiskSku } from './DiskSku';
import { DiskProperties } from './DiskProperties';
/**
 * @description Disk resource.
 */
export interface Disk extends Resource {
    /**
     * @description A relative URI containing the ID of the VM that has the disk attached.
     */
    readonly managedBy: string ;
    sku: DiskSku;
    /**
     * @description The Logical zone list for Disk.
     */
    zones: Array<string>;
    properties: DiskProperties;
}
