import { SubResourceReadOnly } from './SubResourceReadOnly';
/**
 * @description Dedicated Host Group Properties.
 * @since 2019-12-01
 */
export interface DedicatedHostGroupProperties {
    /**
     * @description Number of fault domains that the host group can span.
     */
    platformFaultDomainCount?: int32 & Minimum<1> & Maximum<3>;
    /**
     * @description A list of references to all dedicated hosts in the dedicated host group.
     */
    readonly hosts: Array<SubResourceReadOnly>;
}
