import { Resource } from './Resource';
import { EncryptionSetIdentity } from './EncryptionSetIdentity';
import { EncryptionSetProperties } from './EncryptionSetProperties';
/**
 * @description disk encryption set resource.
 */
export interface DiskEncryptionSet extends Resource {
    identity: EncryptionSetIdentity;
    properties: EncryptionSetProperties;
}
