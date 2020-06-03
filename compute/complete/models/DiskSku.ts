import { DiskStorageAccountTypes } from "../enums/DiskStorageAccountTypes";

/**
 * @description The disks and snapshots sku name. Can be Standard_LRS or Premium_LRS.
 * @since 2017-03-30
 */
export interface DiskSku {
    /**
     * @description The sku name.
     * @Type  '2018-06-01' - type changed from 'StorageAccountTypes | string' to 'DiskStorageAccountTypes | string'
     */
    name: DiskStorageAccountTypes | string;
    /**
     * @description The sku tier.
     */
    readonly tier: string ;
}
