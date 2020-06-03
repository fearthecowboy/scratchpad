
/**
 * @description Represents the dedicated host unutilized capacity in terms of a specific VM size.
 */
export interface DedicatedHostAllocatableVM {
    /**
     * @description VM size in terms of which the unutilized capacity is represented.
     */
    vmSize: string;
    /**
     * @description Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
     */
    count: double;
}
