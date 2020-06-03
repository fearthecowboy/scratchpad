
/**
 * @description The type of identity used for the virtual machine. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
 * @todo temporary-reuse-marker
 * @since 2016-03-30
 */
export enum ResourceIdentityType {
    /**
     *
     */
    SystemAssigned = 'SystemAssigned',
    /**
     * @since 2018-06-01
     */
    UserAssigned = "UserAssigned",
    /**
     * @since 2018-06-01
     */
    'SystemAssigned, UserAssigned' = "SystemAssigned, UserAssigned",
    /**
     * @since 2018-06-01
     */
    None = "None"
}
