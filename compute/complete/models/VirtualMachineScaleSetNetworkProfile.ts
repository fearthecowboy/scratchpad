import { ApiEntityReference } from "./ApiEntityReference";
import { VirtualMachineScaleSetNetworkConfiguration } from './VirtualMachineScaleSetNetworkConfiguration';

/**
 * @description Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfile {
    /**
     * @description The list of network configurations.
     */
    networkInterfaceConfigurations: Array<VirtualMachineScaleSetNetworkConfiguration>;
    /** @description A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     * @since 2017-03-30
     */
    healthProbe: ApiEntityReference;
}
