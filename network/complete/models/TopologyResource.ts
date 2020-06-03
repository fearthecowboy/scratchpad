import { TopologyAssociation } from './TopologyAssociation';

/**
 * @description The network resource topology information for the given resource group.
 */
export interface TopologyResource {
    /**
     * @description Name of the resource.
     */
    name: string;
    /**
     * @description ID of the resource.
     */
    id: string;
    /**
     * @description Resource location.
     */
    location: string;
    /**
     * @description Holds the associations the resource has with other resources in the resource group.
     */
    associations: Array<TopologyAssociation>;
}
