import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { DiskEncryptionSetParameters } from './DiskEncryptionSetParameters';
/**
 * @description Describes the parameters of a ScaleSet managed disk.
 */
export interface VirtualMachineScaleSetManagedDiskParameters {
    /**
     * @description Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType: StorageAccountTypes | string;
    /**
     * @description Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet: DiskEncryptionSetParameters;
}
