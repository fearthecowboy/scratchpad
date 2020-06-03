import { Plan } from './Plan';
import { UpdateResource } from './UpdateResource';
import { VirtualMachineIdentity } from './VirtualMachineIdentity';
import { VirtualMachineProperties } from './VirtualMachineProperties';

/**
 * @description Describes a Virtual Machine Update.
 * @since 2018-06-01
 */
export interface VirtualMachineUpdate extends UpdateResource {
    /**
     * @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan: Plan;
    properties: VirtualMachineProperties;
    /**
     * @description The identity of the virtual machine, if configured.
     */
    identity: VirtualMachineIdentity;
    /**
     * @description The virtual machine zones.
     */
    zones: Array<string>;
}
