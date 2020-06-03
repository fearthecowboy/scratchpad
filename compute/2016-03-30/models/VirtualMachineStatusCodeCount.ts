
/**
 * @description The status code and count of the virtual machine scale set instance view status summary.
 */
export interface VirtualMachineStatusCodeCount {
    /**
     * @description The instance view status code.
     */
    readonly code: string ;
    /**
     * @description The number of instances having a particular status code.
     */
    readonly count: int32;
}
