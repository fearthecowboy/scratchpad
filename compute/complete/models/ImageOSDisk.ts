import { CachingTypes } from '../enums/CachingTypes';
import { OperatingSystemStateTypes } from '../enums/OperatingSystemStateTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { SubResource } from './SubResource';

/**
 * @description Describes an Operating System disk.
 * @since 2017-03-30
 */
export interface ImageOSDisk {
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType?: OperatingSystemTypes;
    /**
     * @description The OS State.
     */
    osState?: OperatingSystemStateTypes;
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
