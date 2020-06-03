import { ResourceIdentityType } from '../enums/ResourceIdentityType';

/**
 * @description Identity for the virtual machine scale set.
 * @since 2016-03-30
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
    /** @description The list of user identities associated with the virtual machine scale set. The user identity references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}'.
     * @since 2018-06-01
     * @deleted 2019-12-01
     */
    identityIds: Array<string>;
    /** @description The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     * @since 2019-12-01
     */
    userAssignedIdentities: Dictionary<{
            /**
             * @description The principal id of user assigned identity.
             */
            readonly principalId: string ;
            /**
             * @description The client id of user assigned identity.
             */
            readonly clientId: string ;
        }>;
}
