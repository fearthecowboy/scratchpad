import { InstanceViewStatus } from './InstanceViewStatus';
/**
 * @description The health status of the VM.
 */
export interface VirtualMachineHealthStatus {
    /**
     * @description The health status information for the VM.
     */
    readonly status: InstanceViewStatus;
}
