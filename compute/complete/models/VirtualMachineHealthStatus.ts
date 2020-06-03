import { InstanceViewStatus } from './InstanceViewStatus';

/**
 * @description The health status of the VM.
 * @since 2017-03-30
 */
export interface VirtualMachineHealthStatus {
    /**
     * @description The health status information for the VM.
     */
    readonly status: InstanceViewStatus;
}
