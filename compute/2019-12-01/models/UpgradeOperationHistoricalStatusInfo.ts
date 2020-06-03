import { UpgradeOperationHistoricalStatusInfoProperties } from './UpgradeOperationHistoricalStatusInfoProperties';
/**
 * @description Virtual Machine Scale Set OS Upgrade History operation response.
 */
export interface UpgradeOperationHistoricalStatusInfo {
    /**
     * @description Information about the properties of the upgrade operation.
     */
    readonly properties: UpgradeOperationHistoricalStatusInfoProperties;
    /**
     * @description Resource type
     */
    readonly type: string ;
    /**
     * @description Resource location
     */
    readonly location: string ;
}
