import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of ResourceNavigationLink.
 */
export interface ResourceNavigationLinkFormat {
    /**
     * @description Resource type of the linked resource.
     */
    linkedResourceType: string;
    /**
     * @description Link to the external resource.
     */
    link: string;
    /**
     * @description The provisioning state of the resource navigation link resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
