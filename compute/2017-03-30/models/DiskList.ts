import { Disk } from './Disk';
/**
 * @description The List Disks operation response.
 */
export interface DiskList {
    /**
     * @description A list of disks.
     */
    value?: Array<Disk>;
    /**
     * @description The uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks.
     */
    nextLink: string;
}
