import { Resource } from './Resource';
import { Sku } from './Sku';
import { Plan } from './Plan';
import { VirtualMachineScaleSetProperties } from './VirtualMachineScaleSetProperties';
import { VirtualMachineScaleSetIdentity } from './VirtualMachineScaleSetIdentity';
/**
 * @description Describes a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSet extends Resource {
    /**
     * @description The virtual machine scale set sku.
     */
    sku: Sku;
    /**
     * @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan: Plan;
    properties: VirtualMachineScaleSetProperties;
    /**
     * @description The identity of the virtual machine scale set, if configured.
     */
    identity: VirtualMachineScaleSetIdentity;
    /**
     * @description The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set.
     */
    zones: Array<string>;
}
