import { InstanceViewStatus } from './InstanceViewStatus';
import { VirtualMachineExtensionHandlerInstanceView } from './VirtualMachineExtensionHandlerInstanceView';

/**
 * @description The instance view of the VM Agent running on the virtual machine.
 */
export interface VirtualMachineAgentInstanceView {
    /**
     * @description The VM Agent full version.
     */
    vmAgentVersion: string;
    /**
     * @description The virtual machine extension handler instance view.
     */
    extensionHandlers: Array<VirtualMachineExtensionHandlerInstanceView>;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
}
