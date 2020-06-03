import { Plan } from "./Plan";
import { Resource } from './Resource';
import { Sku } from './Sku';
import { VirtualMachineScaleSetIdentity } from "./VirtualMachineScaleSetIdentity";
import { VirtualMachineScaleSetProperties } from './VirtualMachineScaleSetProperties';

/**
 * @description Describes a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSet extends Resource {
    /**
     * @description The virtual machine scale set sku.
     */
    sku: Sku;
    properties: VirtualMachineScaleSetProperties;
    /** @description The identity of the virtual machine scale set, if configured.
     * @since 2016-03-30
     */
    identity: VirtualMachineScaleSetIdentity;
    /** @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     * @since 2017-03-30
     */
    plan: Plan;
    /** @description The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set.
     * @since 2017-03-30
     */
    zones: Array<string>;
}
