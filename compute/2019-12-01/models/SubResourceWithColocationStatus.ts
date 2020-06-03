import { SubResource } from './SubResource';
import { InstanceViewStatus } from './InstanceViewStatus';
export interface SubResourceWithColocationStatus extends SubResource {
    /**
     * @description Describes colocation status of a resource in the Proximity Placement Group.
     */
    colocationStatus: InstanceViewStatus;
}
