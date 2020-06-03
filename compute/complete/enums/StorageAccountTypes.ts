
/**
 * @extensible
 * @description Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS. NOTE: Managed OS disk storage account type can only be set when you create the scale set.
 * @todo temporary-reuse-marker
 * @since 2017-03-30
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
     * @since 2018-06-01
     */
    StandardSSD_LRS = "StandardSSD_LRS",
    /**
     * @since 2019-12-01
     */
    UltraSSD_LRS = "UltraSSD_LRS"
}
