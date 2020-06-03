import { DiskEncryptionSettings } from "./DiskEncryptionSettings";
import { InstanceViewStatus } from './InstanceViewStatus';

/**
 * @description The instance view of the disk.
 */
export interface DiskInstanceView {
    /**
     * @description The disk name.
     */
    name: string;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
    /** @description Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
     * @since 2017-03-30
     */
    encryptionSettings: Array<DiskEncryptionSettings>;
}
