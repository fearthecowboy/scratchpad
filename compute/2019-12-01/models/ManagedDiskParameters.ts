import { SubResource } from './SubResource';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { DiskEncryptionSetParameters } from './DiskEncryptionSetParameters';
/**
 * @description The parameters of a managed disk.
 */
export interface ManagedDiskParameters extends SubResource {
    /**
     * @description Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType: StorageAccountTypes | string;
    /**
     * @description Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet: DiskEncryptionSetParameters;
}
