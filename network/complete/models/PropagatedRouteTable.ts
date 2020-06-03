import { SubResource } from './SubResource';
/**
 * @description The list of RouteTables to advertise the routes to.
 * @since 2020-04-01
 */
export interface PropagatedRouteTable {
    /**
     * @description The list of labels.
     */
    labels: Array<string>;
    /**
     * @description The list of resource ids of all the RouteTables.
     */
    ids: Array<SubResource>;
}
