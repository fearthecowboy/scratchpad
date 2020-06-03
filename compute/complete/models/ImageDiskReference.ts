
/**
 * @description The source image used for creating the disk.
 * @since 2017-03-30
 */
export interface ImageDiskReference {
    /**
     * @description A relative uri containing either a Platform Image Repository or user image reference.
     */
    id?: string;
    /**
     * @description If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
     */
    lun: int32;
}
