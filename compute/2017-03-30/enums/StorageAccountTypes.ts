
/**
 * @extensible
 * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS. NOTE: Managed OS disk storage account type can only be set when you create the scale set.
 * @todo temporary-reuse-marker
 */
export enum StorageAccountTypes {
    /**
     *
     */
    Standard_LRS = 'Standard_LRS',
    /**
     *
     */
    Premium_LRS = 'Premium_LRS'
}
