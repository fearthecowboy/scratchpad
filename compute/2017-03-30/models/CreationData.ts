import { DiskCreateOption } from '../enums/DiskCreateOption';
import { ImageDiskReference } from './ImageDiskReference';
/**
 * @description Data used when creating a disk.
 */
export interface CreationData {
    /**
     * @description This enumerates the possible sources of a disk's creation.
     */
    createOption?: DiskCreateOption;
    /**
     * @description If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
     */
    storageAccountId: string;
    /**
     * @description Disk source information.
     */
    imageReference: ImageDiskReference;
    /**
     * @description If createOption is Import, this is the URI of a blob to be imported into a managed disk.
     */
    sourceUri: string;
    /**
     * @description If createOption is Copy, this is the ARM id of the source snapshot or disk.
     */
    sourceResourceId: string;
}
