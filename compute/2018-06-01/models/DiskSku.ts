import { DiskStorageAccountTypes } from '../enums/DiskStorageAccountTypes';
/**
 * @description The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
 */
export interface DiskSku {
    /**
     * @description The sku name.
     */
    name: DiskStorageAccountTypes | string;
    /**
     * @description The sku tier.
     */
    readonly tier: string ;
}
