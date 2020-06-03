import { SubResource } from './SubResource';
import { CachingTypes } from '../enums/CachingTypes';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { DiskEncryptionSetParameters } from './DiskEncryptionSetParameters';
/**
 * @description Describes a image disk.
 */
export interface ImageDisk {
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
     * @description Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType: StorageAccountTypes | string;
    /**
     * @description Specifies the customer managed disk encryption set resource id for the managed image disk.
     */
    diskEncryptionSet: DiskEncryptionSetParameters;
}
