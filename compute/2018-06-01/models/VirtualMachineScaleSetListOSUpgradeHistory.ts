import { UpgradeOperationHistoricalStatusInfo } from './UpgradeOperationHistoricalStatusInfo';
/**
 * @description List of Virtual Machine Scale Set OS Upgrade History operation response.
 */
export interface VirtualMachineScaleSetListOSUpgradeHistory {
    /**
     * @description The list of OS upgrades performed on the virtual machine scale set.
     */
    value?: Array<UpgradeOperationHistoricalStatusInfo>;
    /**
     * @description The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades.
     */
    nextLink: string;
}
