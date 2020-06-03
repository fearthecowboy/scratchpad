import { InstanceViewStatus } from './InstanceViewStatus';
/**
 * @description The instance view of the disk.
 */
export interface DiskInstanceView {
    /**
     * @description The disk name.
     */
    name: string;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
}
