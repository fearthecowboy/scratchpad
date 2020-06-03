
/**
 * @extensible
 * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS, Premium_LRS, and StandardSSD_LRS. NOTE: Managed OS disk storage account type can only be set when you create the scale set.
 */
export enum StorageAccountTypes {
    /**
     *
     */
    Standard_LRS = 'Standard_LRS',
    /**
     *
     */
    Premium_LRS = 'Premium_LRS',
    /**
     *
     */
    StandardSSD_LRS = 'StandardSSD_LRS'
}
