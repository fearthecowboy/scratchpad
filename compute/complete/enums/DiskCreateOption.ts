
/**
 * @description This enumerates the possible sources of a disk's creation.
 * @since 2017-03-30
 */
export enum DiskCreateOption {
    /**
     *
     */
    Empty = 'Empty',
    /**
     *
     */
    Attach = 'Attach',
    /**
     *
     */
    FromImage = 'FromImage',
    /**
     *
     */
    Import = 'Import',
    /**
     *
     */
    Copy = 'Copy',
    /**
     * @since 2018-06-01
     */
    Restore = "Restore",
    /**
     * Create a new disk by obtaining a write token and using it to directly upload the contents of the disk.
     * @since 2019-12-01
     */
    Upload = "Upload"
}
