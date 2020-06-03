import { ResourceIdentityType } from '../enums/ResourceIdentityType';
/**
 * @description Identity for the virtual machine.
 */
export interface VirtualMachineIdentity {
    /**
     * @description The principal id of virtual machine identity.
     */
    readonly principalId: string ;
    /**
     * @description The tenant id associated with the virtual machine.
     */
    readonly tenantId: string ;
    /**
     * @description The type of identity used for the virtual machine. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
     */
    type: ResourceIdentityType;
}
