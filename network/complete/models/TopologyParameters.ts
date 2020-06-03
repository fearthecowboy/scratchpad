import { SubResource } from "./SubResource";

/**
 * @description Parameters that define the representation of topology.
 */
export interface TopologyParameters {
    /**
     * @description The name of the target resource group to perform topology on.
     * @Optional  '2017-11-01' - made property required
     */
    targetResourceGroupName: string;
    /** @description The reference of the Virtual Network resource.
     * @since 2017-11-01
     */
    targetVirtualNetwork: SubResource;
    /** @description The reference of the Subnet resource.
     * @since 2017-11-01
     */
    targetSubnet: SubResource;
}
