import { SubResource } from './SubResource';
/**
 * @description Parameters that define the representation of topology.
 */
export interface TopologyParameters {
    /**
     * @description The name of the target resource group to perform topology on.
     */
    targetResourceGroupName: string;
    /**
     * @description The reference of the Virtual Network resource.
     */
    targetVirtualNetwork: SubResource;
    /**
     * @description The reference of the Subnet resource.
     */
    targetSubnet: SubResource;
}
