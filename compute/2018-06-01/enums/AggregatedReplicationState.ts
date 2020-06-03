
/**
 * @extensible
 * @description This is the aggregated replication status based on all the regional replication status flags.
 */
export enum AggregatedReplicationState {
    /**
     *
     */
    Unknown = 'Unknown',
    /**
     *
     */
    InProgress = 'InProgress',
    /**
     *
     */
    Completed = 'Completed',
    /**
     *
     */
    Failed = 'Failed'
}
