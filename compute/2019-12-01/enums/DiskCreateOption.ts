
/**
 * @extensible
 * @description This enumerates the possible sources of a disk's creation.
 */
export enum DiskCreateOption {
    /** Create an empty data disk of a size given by diskSizeGB. */
    Empty = 'Empty',
    /** Disk will be attached to a VM. */
    Attach = 'Attach',
    /** Create a new disk from a platform image specified by the given imageReference or galleryImageReference. */
    FromImage = 'FromImage',
    /** Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId. */
    Import = 'Import',
    /** Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId. */
    Copy = 'Copy',
    /** Create a new disk by copying from a backup recovery point. */
    Restore = 'Restore',
    /** Create a new disk by obtaining a write token and using it to directly upload the contents of the disk. */
    Upload = 'Upload'
}
