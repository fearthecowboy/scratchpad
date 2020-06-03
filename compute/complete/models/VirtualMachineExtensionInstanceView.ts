import { InstanceViewStatus } from './InstanceViewStatus';

/**
 * @description The instance view of a virtual machine extension.
 */
export interface VirtualMachineExtensionInstanceView {
    /**
     * @description The virtual machine extension name.
     */
    name: string;
    /**
     * @description Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type: string;
    /**
     * @description Specifies the version of the script handler.
     */
    typeHandlerVersion: string;
    /**
     * @description The resource status information.
     */
    substatuses: Array<InstanceViewStatus>;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
}
