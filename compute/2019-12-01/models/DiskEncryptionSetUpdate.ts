import { DiskEncryptionSetUpdateProperties } from './DiskEncryptionSetUpdateProperties';
/**
 * @description disk encryption set update resource.
 */
export interface DiskEncryptionSetUpdate {
    properties: DiskEncryptionSetUpdateProperties;
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
}
