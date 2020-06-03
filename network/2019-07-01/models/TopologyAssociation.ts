import { AssociationType } from '../enums/AssociationType';
/**
 * @description Resources that have an association with the parent resource.
 */
export interface TopologyAssociation {
    /**
     * @description The name of the resource that is associated with the parent resource.
     */
    name: string;
    /**
     * @description The ID of the resource that is associated with the parent resource.
     */
    resourceId: string;
    /**
     * @description The association type of the child resource to the parent resource.
     */
    associationType: AssociationType | string;
}
