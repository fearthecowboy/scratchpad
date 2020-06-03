import { InstanceViewStatus } from './InstanceViewStatus';

/**
 * @description The instance view of a virtual machine extension handler.
 */
export interface VirtualMachineExtensionHandlerInstanceView {
    /**
     * @description Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type: string;
    /**
     * @description Specifies the version of the script handler.
     */
    typeHandlerVersion: string;
    /**
     * @description The extension handler status.
     */
    status: InstanceViewStatus;
}
