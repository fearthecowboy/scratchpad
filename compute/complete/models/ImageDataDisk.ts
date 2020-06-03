import { CachingTypes } from '../enums/CachingTypes';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { SubResource } from './SubResource';

/**
 * @description Describes a data disk.
 * @since 2017-03-30
 */
export interface ImageDataDisk {
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun?: int32;
    /**
     * @description The snapshot.
     * @deleted 2019-12-01
     */
    snapshot: SubResource;
    /**
     * @description The managedDisk.
     * @deleted 2019-12-01
     */
    managedDisk: SubResource;
    /**
     * @description The Virtual Hard Disk.
     * @deleted 2019-12-01
     */
    blobUri: string;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage
     * @deleted 2019-12-01
     */
    caching: CachingTypes;
    /**
     * @description Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     * @deleted 2019-12-01
     */
    diskSizeGB: int32;
    /**
     * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
     * @deleted 2019-12-01
     */
    storageAccountType: StorageAccountTypes | string;
}
