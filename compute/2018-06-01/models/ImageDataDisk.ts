import { SubResource } from './SubResource';
import { CachingTypes } from '../enums/CachingTypes';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
/**
 * @description Describes a data disk.
 */
export interface ImageDataDisk {
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun?: int32;
    /**
     * @description The snapshot.
     */
    snapshot: SubResource;
    /**
     * @description The managedDisk.
     */
    managedDisk: SubResource;
    /**
     * @description The Virtual Hard Disk.
     */
    blobUri: string;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /**
     * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS, Premium_LRS, and StandardSSD_LRS.
     */
    storageAccountType: StorageAccountTypes | string;
}
