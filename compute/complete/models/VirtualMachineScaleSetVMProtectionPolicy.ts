
/**
 * @description The protection policy of a virtual machine scale set VM.
 * @since 2019-12-01
 */
export interface VirtualMachineScaleSetVMProtectionPolicy {
    /**
     * @description Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
     */
    protectFromScaleIn: boolean;
    /**
     * @description Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.
     */
    protectFromScaleSetActions: boolean;
}
