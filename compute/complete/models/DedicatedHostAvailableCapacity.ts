import { DedicatedHostAllocatableVM } from './DedicatedHostAllocatableVM';
/**
 * @description Dedicated host unutilized capacity.
 * @since 2019-12-01
 */
export interface DedicatedHostAvailableCapacity {
    /**
     * @description The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host.
     */
    allocatableVMs: Array<DedicatedHostAllocatableVM>;
}
