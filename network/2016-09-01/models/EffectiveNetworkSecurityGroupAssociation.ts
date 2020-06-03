import { SubResource } from './SubResource';
/**
 * @description The effective network security group association.
 */
export interface EffectiveNetworkSecurityGroupAssociation {
    /**
     * @description The ID of the subnet if assigned.
     */
    subnet: SubResource;
    /**
     * @description The ID of the network interface if assigned.
     */
    networkInterface: SubResource;
}
