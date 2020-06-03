import { ProvisioningState } from "../enums/ProvisioningState";

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
}
