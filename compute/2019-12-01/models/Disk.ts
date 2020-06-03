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
    /**
     * @description List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly managedByExtended: Array<string>;
    sku: DiskSku;
    /**
     * @description The Logical zone list for Disk.
     */
    zones: Array<string>;
    properties: DiskProperties;
}
