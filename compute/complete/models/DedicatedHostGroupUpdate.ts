import { DedicatedHostGroupProperties } from './DedicatedHostGroupProperties';
import { UpdateResource } from './UpdateResource';
/**
 * @description Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated.
 * @since 2019-12-01
 */
export interface DedicatedHostGroupUpdate extends UpdateResource {
    properties: DedicatedHostGroupProperties;
    /**
     * @description Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    zones: Array<string>;
}
