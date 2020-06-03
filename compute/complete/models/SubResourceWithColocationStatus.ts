import { InstanceViewStatus } from './InstanceViewStatus';
import { SubResource } from './SubResource';
/**
 * @since 2019-12-01
 */
export interface SubResourceWithColocationStatus extends SubResource {
    /**
     * @description Describes colocation status of a resource in the Proximity Placement Group.
     */
    colocationStatus: InstanceViewStatus;
}
