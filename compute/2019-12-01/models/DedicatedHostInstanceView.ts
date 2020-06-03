import { DedicatedHostAvailableCapacity } from './DedicatedHostAvailableCapacity';
import { InstanceViewStatus } from './InstanceViewStatus';
/**
 * @description The instance view of a dedicated host.
 */
export interface DedicatedHostInstanceView {
    /**
     * @description Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
     */
    readonly assetId: string ;
    /**
     * @description Unutilized capacity of the dedicated host.
     */
    availableCapacity: DedicatedHostAvailableCapacity;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
}
