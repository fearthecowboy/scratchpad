import { DiskCreateOption } from '../enums/DiskCreateOption';
import { ImageDiskReference } from './ImageDiskReference';
/**
 * @description Data used when creating a disk.
 */
export interface CreationData {
    /**
     * @description This enumerates the possible sources of a disk's creation.
     */
    createOption?: DiskCreateOption | string;
    /**
     * @description Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
     */
    storageAccountId: string;
    /**
     * @description Disk source information.
     */
    imageReference: ImageDiskReference;
    /**
     * @description Required if creating from a Gallery Image. The id of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
     */
    galleryImageReference: ImageDiskReference;
    /**
     * @description If createOption is Import, this is the URI of a blob to be imported into a managed disk.
     */
    sourceUri: string;
    /**
     * @description If createOption is Copy, this is the ARM id of the source snapshot or disk.
     */
    sourceResourceId: string;
    /**
     * @description If this field is set, this is the unique id identifying the source of this resource.
     */
    readonly sourceUniqueId: string ;
    /**
     * @description If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
     */
    uploadSizeBytes: int64;
}
