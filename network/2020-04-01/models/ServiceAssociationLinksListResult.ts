import { ServiceAssociationLink } from './ServiceAssociationLink';
/**
 * @description Response for ServiceAssociationLinks_List operation.
 */
export interface ServiceAssociationLinksListResult {
    /**
     * @description The service association links in a subnet.
     */
    value: Array<ServiceAssociationLink>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
