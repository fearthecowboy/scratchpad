
/**
 * @extensible
 * @description This is the aggregated replication status based on all the regional replication status flags.
 * @since 2018-06-01
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
