import { Resource } from './Resource';
import { DedicatedHostGroupProperties } from './DedicatedHostGroupProperties';
/**
 * @description Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.
 */
export interface DedicatedHostGroup extends Resource {
    properties: DedicatedHostGroupProperties;
    /**
     * @description Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    zones: Array<string>;
}
