import { StorageAccountTypes } from '../enums/StorageAccountTypes';
/**
 * @description The disks and snapshots sku name. Can be Standard_LRS or Premium_LRS.
 */
export interface DiskSku {
    /**
     * @description The sku name.
     */
    name: StorageAccountTypes | string;
    /**
     * @description The sku tier.
     */
    readonly tier: string ;
}
