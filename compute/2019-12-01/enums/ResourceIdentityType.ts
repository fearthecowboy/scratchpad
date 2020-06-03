
/**
 * @description The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
 * @todo temporary-reuse-marker
 */
export enum ResourceIdentityType {
    /**
     *
     */
    SystemAssigned = 'SystemAssigned',
    /**
     *
     */
    UserAssigned = 'UserAssigned',
    /**
     *
     */
    'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned',
    /**
     *
     */
    None = 'None'
}
