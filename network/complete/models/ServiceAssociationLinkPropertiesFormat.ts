import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description Properties of ServiceAssociationLink.
 * @since 2019-07-01
 */
export interface ServiceAssociationLinkPropertiesFormat {
    /**
     * @description Resource type of the linked resource.
     */
    linkedResourceType: string;
    /**
     * @description Link to the external resource.
     */
    link: string;
    /**
     * @description The provisioning state of the service association link resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description If true, the resource can be deleted.
     */
    allowDelete: boolean;
    /**
     * @description A list of locations.
     */
    locations: Array<string>;
}
