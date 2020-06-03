import { StorageAccountTypes } from '../enums/StorageAccountTypes';
import { DiskEncryptionSetParameters } from "./DiskEncryptionSetParameters";
import { SubResource } from './SubResource';

/**
 * @description The parameters of a managed disk.
 * @since 2017-03-30
 */
export interface ManagedDiskParameters extends SubResource {
    /**
     * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
     */
    storageAccountType: StorageAccountTypes | string;
    /** @description Specifies the customer managed disk encryption set resource id for the managed disk.
     * @since 2019-12-01
     */
    diskEncryptionSet: DiskEncryptionSetParameters;
}
