import { SnapshotStorageAccountTypes } from '../enums/SnapshotStorageAccountTypes';

/**
 * @description The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
 * @since 2018-06-01
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
