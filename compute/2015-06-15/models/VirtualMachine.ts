import { Resource } from './Resource';
import { Plan } from './Plan';
import { VirtualMachineProperties } from './VirtualMachineProperties';
import { VirtualMachineExtension } from './VirtualMachineExtension';
/**
 * @description Describes a Virtual Machine.
 */
export interface VirtualMachine extends Resource {
    /**
     * @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan: Plan;
    properties: VirtualMachineProperties;
    /**
     * @description The virtual machine child extension resources.
     */
    readonly resources: Array<VirtualMachineExtension>;
}
