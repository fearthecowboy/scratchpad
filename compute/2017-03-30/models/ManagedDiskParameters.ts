import { SubResource } from './SubResource';
import { StorageAccountTypes } from '../enums/StorageAccountTypes';
/**
 * @description The parameters of a managed disk.
 */
export interface ManagedDiskParameters extends SubResource {
    /**
     * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
     */
    storageAccountType: StorageAccountTypes | string;
}
