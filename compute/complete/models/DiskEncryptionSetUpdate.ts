import { DiskEncryptionSetUpdateProperties } from './DiskEncryptionSetUpdateProperties';
/**
 * @description disk encryption set update resource.
 * @since 2019-12-01
 */
export interface DiskEncryptionSetUpdate {
    properties: DiskEncryptionSetUpdateProperties;
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
}
