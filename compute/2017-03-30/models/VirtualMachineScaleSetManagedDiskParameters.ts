import { StorageAccountTypes } from '../enums/StorageAccountTypes';
/**
 * @description Describes the parameters of a ScaleSet managed disk.
 */
export interface VirtualMachineScaleSetManagedDiskParameters {
    /**
     * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
     */
    storageAccountType: StorageAccountTypes | string;
}
