
/**
 * @extensible
 * @description The state of the disk.
 */
export enum DiskState {
    /** The disk is not being used and can be attached to a VM. */
    Unattached = 'Unattached',
    /** The disk is currently mounted to a running VM. */
    Attached = 'Attached',
    /** The disk is mounted to a stopped-deallocated VM */
    Reserved = 'Reserved',
    /** The disk currently has an Active SAS Uri associated with it. */
    ActiveSAS = 'ActiveSAS',
    /** A disk is ready to be created by upload by requesting a write token. */
    ReadyToUpload = 'ReadyToUpload',
    /** A disk is created for upload and a write token has been issued for uploading to it. */
    ActiveUpload = 'ActiveUpload'
}
