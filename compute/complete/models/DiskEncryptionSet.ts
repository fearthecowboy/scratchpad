import { EncryptionSetIdentity } from './EncryptionSetIdentity';
import { EncryptionSetProperties } from './EncryptionSetProperties';
import { Resource } from './Resource';
/**
 * @description disk encryption set resource.
 * @since 2019-12-01
 */
export interface DiskEncryptionSet extends Resource {
    identity: EncryptionSetIdentity;
    properties: EncryptionSetProperties;
}
