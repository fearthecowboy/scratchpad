import { ResourceIdentityType } from '../enums/ResourceIdentityType';

/**
 * @description Identity for the resource.
 * @since 2019-07-01
 */
export interface ManagedServiceIdentity {
    /**
     * @description The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    readonly principalId: string ;
    /**
     * @description The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    readonly tenantId: string ;
    /**
     * @description The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
     */
    type: ResourceIdentityType;
    /**
     * @description The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
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
