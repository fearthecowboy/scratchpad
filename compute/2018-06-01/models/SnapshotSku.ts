import { SnapshotStorageAccountTypes } from '../enums/SnapshotStorageAccountTypes';
/**
 * @description The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
 */
export interface SnapshotSku {
    /**
     * @description The sku name.
     */
    name: SnapshotStorageAccountTypes | string;
    /**
     * @description The sku tier.
     */
    readonly tier: string ;
}
