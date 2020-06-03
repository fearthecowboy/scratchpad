import { Plan } from './Plan';
import { Resource } from './Resource';
import { Sku } from './Sku';
import { VirtualMachineExtension } from './VirtualMachineExtension';
import { VirtualMachineScaleSetVMProperties } from './VirtualMachineScaleSetVMProperties';

/**
 * @description Describes a virtual machine scale set virtual machine.
 */
export interface VirtualMachineScaleSetVM extends Resource {
    /**
     * @description The virtual machine instance ID.
     */
    readonly instanceId: string ;
    /**
     * @description The virtual machine SKU.
     */
    readonly sku: Sku;
    properties: VirtualMachineScaleSetVMProperties;
    /**
     * @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan: Plan;
    /**
     * @description The virtual machine child extension resources.
     */
    readonly resources: Array<VirtualMachineExtension>;
    /** @description The virtual machine zones.
     * @since 2018-06-01
     */
    readonly zones: Array<string>;
}
