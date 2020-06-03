import { Plan } from './Plan';
import { Sku } from './Sku';
import { UpdateResource } from './UpdateResource';
import { VirtualMachineScaleSetIdentity } from './VirtualMachineScaleSetIdentity';
import { VirtualMachineScaleSetUpdateProperties } from './VirtualMachineScaleSetUpdateProperties';

/**
 * @description Describes a Virtual Machine Scale Set.
 * @since 2017-03-30
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
