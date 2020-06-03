
/**
 * @description Properties of ResourceNavigationLink.
 */
export interface ResourceNavigationLinkFormat {
    /**
     * @description Resource type of the linked resource.
     */
    linkedResourceType: string;
    /**
     * @description Link to the external resource
     */
    link: string;
    /**
     * @description Provisioning state of the ResourceNavigationLink resource.
     */
    readonly provisioningState: string ;
}
