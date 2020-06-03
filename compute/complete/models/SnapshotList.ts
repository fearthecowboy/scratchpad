import { Snapshot } from './Snapshot';

/**
 * @description The List Snapshots operation response.
 * @since 2017-03-30
 */
export interface SnapshotList {
    /**
     * @description A list of snapshots.
     */
    value?: Array<Snapshot>;
    /**
     * @description The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots.
     */
    nextLink: string;
}
