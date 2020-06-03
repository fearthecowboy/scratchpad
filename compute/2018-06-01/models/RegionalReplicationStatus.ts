import { ReplicationState } from '../enums/ReplicationState';
/**
 * @description This is the regional replication status.
 */
export interface RegionalReplicationStatus {
    /**
     * @description The region to which the gallery Image Version is being replicated to.
     */
    readonly region: string ;
    /**
     * @description This is the regional replication state.
     */
    readonly state: ReplicationState | string;
    /**
     * @description The details of the replication status.
     */
    readonly details: string ;
    /**
     * @description It indicates progress of the replication job.
     */
    readonly progress: int32;
}
