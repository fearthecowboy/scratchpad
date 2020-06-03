import { AggregatedReplicationState } from '../enums/AggregatedReplicationState';
import { RegionalReplicationStatus } from './RegionalReplicationStatus';
/**
 * @description This is the replication status of the gallery Image Version.
 */
export interface ReplicationStatus {
    /**
     * @description This is the aggregated replication status based on all the regional replication status flags.
     */
    readonly aggregatedState: AggregatedReplicationState | string;
    /**
     * @description This is a summary of replication status for each region.
     */
    readonly summary: Array<RegionalReplicationStatus>;
}
