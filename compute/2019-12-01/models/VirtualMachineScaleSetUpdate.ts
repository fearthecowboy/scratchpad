import { UpdateResource } from './UpdateResource';
import { Sku } from './Sku';
import { Plan } from './Plan';
import { VirtualMachineScaleSetUpdateProperties } from './VirtualMachineScaleSetUpdateProperties';
import { VirtualMachineScaleSetIdentity } from './VirtualMachineScaleSetIdentity';
/**
 * @description Describes a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSetUpdate extends UpdateResource {
    /**
     * @description The virtual machine scale set sku.
     */
    sku: Sku;
    /**
     * @description The purchase plan when deploying a virtual machine scale set from VM Marketplace images.
     */
    plan: Plan;
    properties: VirtualMachineScaleSetUpdateProperties;
    /**
     * @description The identity of the virtual machine scale set, if configured.
     */
    identity: VirtualMachineScaleSetIdentity;
}
