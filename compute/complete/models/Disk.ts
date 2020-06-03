import { DiskProperties } from './DiskProperties';
import { DiskSku } from './DiskSku';
import { Resource } from './Resource';

/**
 * @description Disk resource.
 * @since 2017-03-30
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
    /** @description List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     * @since 2019-12-01
     */
    readonly managedByExtended: Array<string>;
}
