import { DiskEncryptionSet } from './DiskEncryptionSet';
/**
 * @description The List disk encryption set operation response.
 */
export interface DiskEncryptionSetList {
    /**
     * @description A list of disk encryption sets.
     */
    value?: Array<DiskEncryptionSet>;
    /**
     * @description The uri to fetch the next page of disk encryption sets. Call ListNext() with this to fetch the next page of disk encryption sets.
     */
    nextLink: string;
}
