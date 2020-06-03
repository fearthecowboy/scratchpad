import { WinRMListener } from './WinRMListener';
/**
 * @description Describes Windows Remote Management configuration of the VM
 */
export interface WinRMConfiguration {
    /**
     * @description The list of Windows Remote Management listeners
     */
    listeners: Array<WinRMListener>;
}
