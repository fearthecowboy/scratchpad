import { ResourceIdentityType } from '../enums/ResourceIdentityType';
/**
 * @description Identity for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetIdentity {
    /**
     * @description The principal id of virtual machine scale set identity.
     */
    readonly principalId: string ;
    /**
     * @description The tenant id associated with the virtual machine scale set.
     */
    readonly tenantId: string ;
    /**
     * @description The type of identity used for the virtual machine scale set. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
     */
    type: ResourceIdentityType;
}
